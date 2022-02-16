import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthRemoteServiceService } from '../remote-services/auth-remote-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  /******************* Variables *******************/

  /******************* Constructor *******************/
  constructor(private AuthRemoteServiceService: AuthRemoteServiceService) {}

  /******************* Angular Lifecycle *******************/

  /******************* Functions *******************/
  /* intercept */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.AuthRemoteServiceService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
