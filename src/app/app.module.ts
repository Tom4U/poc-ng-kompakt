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

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    HomeComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
