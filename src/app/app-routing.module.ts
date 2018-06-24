import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UsersComponent} from "./users/users.component";

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'users', component: UsersComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}