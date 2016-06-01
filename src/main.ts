import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2ProjectAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2ProjectAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);

