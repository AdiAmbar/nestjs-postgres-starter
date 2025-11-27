import { Module } from "@nestjs/common";

import { LoggerModule } from "./shared/logger/logger.module";
import { HealthModule } from "./modules/health/health.module";
import { PrismaModule } from "./shared/database/database.module";


@Module({
  imports: [
    LoggerModule,
    HealthModule,
    PrismaModule,
  ],
})
export class AppModule {}
