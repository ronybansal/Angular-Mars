import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2ProjectAppComponent } from '../app/angular2-project.component';

beforeEachProviders(() => [Angular2ProjectAppComponent]);

describe('App: Angular2Project', () => {
  it('should create the app',
      inject([Angular2ProjectAppComponent], (app: Angular2ProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

});
