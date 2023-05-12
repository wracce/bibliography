import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class JwtGuard implements CanActivate {
  constructor(private sessionService: SessionService,private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if (!this.sessionService.isLoggedIn) {

      if (state.url === '/sign-in' || state.url === '/sign-up') return true;

      this.router.navigate(['/sign-in']);

      return false;
    }
    return true;
  }
}
