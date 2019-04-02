import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EgrowApiModule} from './shared/modules/egrow-api/egrow-api.module';
import {TitleService} from './shared/services/title.service';
import {MemberModule} from './modules/member/member.module';
import {NonMemberModule} from './modules/non-member/non-member.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EgrowApiModule,
    MemberModule,
    NonMemberModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private titleService: TitleService) {
    this.titleService.init();
  }
}
