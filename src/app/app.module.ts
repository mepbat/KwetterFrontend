import {NgModule, Pipe} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetsComponent } from './profile/tweets/tweets.component';
import { DetailsComponent } from './profile/details/details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartComponent } from './start/start.component';
import { BasicInfoComponent } from './profile/basic-info/basic-info.component';
import { FollowingComponent } from './profile/following/following.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { TimeAgoPipe } from 'time-ago-pipe';

@Pipe({
  name: 'timeAgo',
  pure: false
})

export class TimeAgoExtendsPipe extends TimeAgoPipe {}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    TweetsComponent,
    DetailsComponent,
    NavigationComponent,
    StartComponent,
    BasicInfoComponent,
    FollowingComponent,
    FollowersComponent,
    TimeAgoExtendsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
