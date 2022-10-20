import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommandComponent } from './shared/ui/command/command.component';
import { GreeterComponent } from './pages/greeter/greeter.component';
import { GreeterFormComponent } from './pages/greeter/greeter-form/greeter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    GreeterComponent,
    GreeterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
