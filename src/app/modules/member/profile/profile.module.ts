import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './pages/profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
