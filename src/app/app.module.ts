import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UsersComponent} from './users/users.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserItemComponent} from './users/user-list/user-item/user-item.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {GroupsComponent} from './groups/groups.component';
import {GroupListComponent} from './groups/group-list/group-list.component';
import {GroupItemComponent} from './groups/group-list/group-item/group-item.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UsersComponent,
        UserListComponent,
        UserItemComponent,
        UserDetailComponent,
        UserEditComponent,
        GroupsComponent,
        GroupListComponent,
        GroupItemComponent,
        AppRoutingModule,
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
