import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule ,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms'
const routes: Routes = [{path:'', component:LoginComponent},


{path:'home', component:HomeComponent}

];

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
