
//Imports
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Class that handles authentication operations
 */
@Injectable()
export class AuthenticationService {

  /**
   * Constructor
   * @param http
   */
  constructor(private http: Http) { }

  /**
   * Login user
   * @param username
   * @param password
   * @returns {Observable<R>}
   */
  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();

        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
    });
  }

  /**
   * Logout function
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
