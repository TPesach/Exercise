import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { InstructionsComponent } from './Components/instructions/instructions.component';
import { ChildrenFormComponent } from './Components/children-form/children-form.component';

const routes:Routes = [
  { path: "", redirectTo: "form", pathMatch: "full" },
  {path:"form", component:FormComponent,
children:[
  {path:"child/:location", component:ChildrenFormComponent}
]},
  {path:"instructions", component:InstructionsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class RoutingModuleModule { }
