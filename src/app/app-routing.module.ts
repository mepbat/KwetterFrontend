import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {StartComponent} from './start/start.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthguardService} from './shared/services/authGuard/authguard.service';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {TagComponent} from './tag/tag.component';
import {RoleguardService} from './shared/services/roleGuard/roleguard.service';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: '', component: StartComponent, canActivate: [AuthguardService]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:username', component: ProfileComponent, canActivate: [AuthguardService]},
  {path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthguardService]},
  {path: 'tag/:tag', component: TagComponent, canActivate: [AuthguardService]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthguardService, RoleguardService]},
  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

