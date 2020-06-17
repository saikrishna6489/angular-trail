import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { RoutegaurdService } from './routegaurd.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NatureComponent } from './nature/nature.component';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component: HomeComponent, 
      children:[
        {path:'Nature', component: NatureComponent}
      ]},
  {path:'Login', component: LoginComponent},
  {path:'Signup', component: SignupComponent},
  {path:'Services', component: ServicesComponent},
  {path:'Contact', component: ContactComponent, canActivate:[RoutegaurdService]}, 
  {path:'Gallery', component:GalleryComponent},
  {path:'404', component: NotfoundComponent},
  {path:'**', redirectTo:'/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
