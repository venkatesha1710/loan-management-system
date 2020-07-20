import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { EditLoanComponent } from './editloan/editloan.component';
import { AddLoanComponent } from './addloan/addloan.component';


const routes: Routes = [
{path : '', redirectTo:'/login',pathMatch:'full'},
{path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent },
{ path: 'search', component: SearchComponent },
{path:'editloan', component: EditLoanComponent},
{path:'addloan', component: AddLoanComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
