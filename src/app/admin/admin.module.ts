import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { HeaderForAdminComponent } from './components/header-for-admin/header-for-admin.component';
import { AngularMaterialModule } from '../angular-material.module';
// import { AuthService } from './shared/services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/services/auth.guard';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from './shared/services/alert.service';


@NgModule({
    declarations: [
        AdminLayoutComponent, 
        LoginPageComponent, 
        DashboardPageComponent, 
        CreatePageComponent, 
        EditPageComponent, 
        HeaderForAdminComponent, 
        RegisterPageComponent,
        SearchPipe,
        AlertComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AdminLayoutComponent, children: [
                {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                {path: 'login', component: LoginPageComponent},
                {path: 'register', component: RegisterPageComponent},
                {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
                {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
                {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
            ]}
        ])
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard,
        AlertService
    ],
    // providers: [AuthService, AuthGuard]
})
export class AdminModule { }
