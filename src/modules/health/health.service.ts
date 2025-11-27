import { Injectable } from '@nestjs/common';

import { version } from "../../../package.json";

@Injectable()
export class HealthService {
  check() {
    return {
        apiVersion: {
            version,
            status: "ok",
            timestamp: new Date().toISOString(),
      },
    };
  }
}