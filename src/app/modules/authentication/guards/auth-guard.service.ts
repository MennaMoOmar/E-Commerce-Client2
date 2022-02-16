import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthRemoteServiceService } from '../remote-services/auth-remote-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  /******************* Variables *******************/

  /******************* Constructor *******************/
  constructor(
    private AuthRemoteServiceService: AuthRemoteServiceService,
    private router: Router
  ) {}

  /******************* Angular Lifecycle *******************/

  /******************* Functions *******************/
  /* CanActivate(secure) URL if logedin user */
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.AuthRemoteServiceService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
