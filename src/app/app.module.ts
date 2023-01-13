import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
  IConfig,
} from 'ngx-mask';
import { Interceptor } from './shared/interceptor/interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AlertComponent } from './shared/components/modal/alert.component';
import { InputFieldComponent } from './shared/components/input-field/input-field.component';
import { DataFormComponent } from './shared/components/data-form/data-form.component';
import { AutoCompleteComponent } from './shared/components/auto-complete/auto-complete.component';
import { MenuComponent } from './shared/components/menu/menu.component';

const authenticatorService = [Interceptor];
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    AlertComponent,
    InputFieldComponent,
    DataFormComponent,
    AutoCompleteComponent,
    MenuComponent,
  ],
  providers: [
    authenticatorService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FontAwesomeModule,
    MatExpansionModule,
    MatProgressBarModule,
  ],
})
export class AppModule {}
