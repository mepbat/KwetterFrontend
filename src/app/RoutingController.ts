  import {NgModule} from '@angular/core';
  import {RouterModule, Routes} from '@angular/router';
  import {ProfileComponent} from './profile/profile.component';

  const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        {enableTracing: true} // <-- debugging purposes only
      ),
    ]
  })
  export class RoutingController {
  }
