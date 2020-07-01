import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url === 'https://umbrellaprojrct.firebaseio.com/bow.json') {
            return this.authService.user.pipe(take(1), exhaustMap(user => {
                const modifiedRequest = req.clone({ params: new HttpParams().set('auth', user.token) });
                return next.handle(modifiedRequest);
            }));
        }
        return next.handle(req);
    }
}
