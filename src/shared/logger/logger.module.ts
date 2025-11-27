import { Module } from "@nestjs/common";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";

const { combine, timestamp, prettyPrint, colorize, errors } = winston.format;

@Module({
  imports: [
    WinstonModule.forRoot({
      format: combine(
        errors({ stack: true }),
        colorize(),
        timestamp(),
        prettyPrint(),
      ),
      transports: [
        new winston.transports.Console({
          consoleWarnLevels: ["emerg", "alert", "crit", "error"],
          level: "error",
        }),
      ],
    }),
  ],
  exports: [WinstonModule],  
})
export class LoggerModule {}
