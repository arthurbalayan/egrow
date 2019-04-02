import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './shared/modules/egrow-api/authentication/auth-guard.service';
import {MemberPageComponent} from './modules/member/components/member-page/member-page.component';

const routes: Routes = [
  // {
  //     path: '',
  //     component: NonMemberPageComponent,
  //     loadChildren: './modules/non-member/non-member.module#NonMemberModule'
  // },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'member',
    component: MemberPageComponent,
    canActivate: [AuthGuardService],
    loadChildren: './modules/member/member.module#MemberModule'
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
