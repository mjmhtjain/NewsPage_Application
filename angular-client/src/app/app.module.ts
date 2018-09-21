import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(router)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
