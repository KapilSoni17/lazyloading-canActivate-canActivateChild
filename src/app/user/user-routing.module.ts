import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../user/list/list.component';
import { LoginComponent } from '../user/login/login.component';
console.warn("user module loaded");
const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
