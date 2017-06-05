import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { LoggerService } from './services/logger.service';
import { DataApiService } from "./services/data-api.service";

@NgModule({
  providers: [LoggerService, DataApiService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export {
  LoggerService,
  DataApiService,
}
