import {NgModule, Pipe} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {TweetsComponent} from './profile/tweets/tweets.component';
import {DetailsComponent} from './profile/details/details.component';
import {NavigationComponent} from './navigation/navigation.component';
import {StartComponent} from './start/start.component';
import {BasicInfoComponent} from './profile/basic-info/basic-info.component';
import {FollowingComponent} from './profile/following/following.component';
import {FollowersComponent} from './profile/followers/followers.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { PostTweetComponent } from './start/post-tweet/post-tweet.component';
import { TimelineComponent } from './start/timeline/timeline.component';
import { MentionsComponent } from './start/mentions/mentions.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { LastTweetComponent } from './start/last-tweet/last-tweet.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TrendsComponent } from './start/trends/trends.component';
import { TagComponent } from './tag/tag.component';
import { HashtagComponent } from './components/hashtag/hashtag.component';
import { AdminComponent } from './admin/admin.component';
import {MatIconModule} from '@angular/material/icon';

@Pipe({
  name: 'timeAgo',
  pure: false
})

export class TimeAgoExtendsPipe extends TimeAgoPipe {
}

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
    TimeAgoExtendsPipe,
    RegisterComponent,
    PostTweetComponent,
    TimelineComponent,
    MentionsComponent,
    TweetComponent,
    LastTweetComponent,
    EditProfileComponent,
    TrendsComponent,
    TagComponent,
    HashtagComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
