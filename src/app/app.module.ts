import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CommandComponent } from './shared/ui/command/command.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LoginComponent } from './shared/ui/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ApiAuthService } from './services/api-auth.service';
import { FieldErrorDirective } from './shared/ui/form/directives/field-error.directive';
import { FormSubmitDirective } from './shared/ui/form/directives/form-submit.directive';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    HomeComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LoginComponent,
    FieldErrorDirective,
    FormSubmitDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    {
      provide: AuthService,
      useExisting: ApiAuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
