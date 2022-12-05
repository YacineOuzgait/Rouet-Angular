import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './menu/signup/signup.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';


const routes: Routes = [
  {
    path:'menu',
    component: MenuComponent,
    children: [
      {
        path:'', 
        redirectTo: 'user'
      },
      {
        path:'user', 
        component:UserProfileComponent
      },
      {
        path:'signup', 
        component:SignupComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
