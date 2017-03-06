//Imports
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

/**
 * Clas that handles guward operations
 */
@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * Constructor
   * @param router
   */
  constructor(private router: Router) {
  }


  /**
   * Verify if user is logged in
   * @param route
   * @param state
   * @returns {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
