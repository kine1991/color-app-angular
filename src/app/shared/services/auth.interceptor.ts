import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/admin/shared/services/auth.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService,
        private router: Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept0')
        if(this.auth.isAuthenticated()){
            req = req.clone({
                setParams: {
                    auth: this.auth.token
                }
            })
            console.log('req')
            console.log(req)
        }
        return next.handle(req)
            .pipe(
                tap(() => {
                    console.log('Intercept')
                }),
                catchError((error: HttpErrorResponse) => {
                    console.log('AuthInterceptor', error)
                    if(error.status === 401){
                        this.auth.logout()
                        this.router.navigate(['/admin', 'login'], {
                            queryParams: {
                                authFailed: true
                            }
                        })
                    }
                    return throwError(error)
                })
            )
    }
}