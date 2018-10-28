import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormioModule, FormioAppConfig } from 'angular-formio';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
	FormioModule,
	 RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
	  {
        path: 'home',
        component: HomeComponent
     },
      {
        path: 'form',
        component: FormComponent
     }
	 ])
  ],
  providers: [
	{provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
