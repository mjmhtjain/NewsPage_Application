import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from './login/login.service';
import { HttpService } from './http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddNewsService } from './add-news/add-news.service';
import { DashboardService } from './dashboard/dashboard.service';
import { LoginModalComponent } from './login-modal/login-modal.component';

const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        AddNewsComponent,
        LoginModalComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(router),
        FormsModule,
        HttpClientModule
    ],
    providers: [LoginService, HttpService, AddNewsService,
        DashboardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
