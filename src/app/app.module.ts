import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModuleModule} from './routing-module.module';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { InstructionsComponent } from './Components/instructions/instructions.component';
import { ChildrenFormComponent } from './Components/children-form/children-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InstructionsComponent,
    ChildrenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModuleModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
