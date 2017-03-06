
//Imports
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService, AuthenticationService} from '../../shared/service/index';

/**
 * Login class
 */
@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  //Fields
  model: any = {};
  loading = false;
  returnUrl: string;

  /**
   * Constructor
   * @param route
   * @param router
   * @param authenticationService
   * @param alertService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}



  /**
  * Init method
  */
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  /**
   * Login function
   */
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }


}
