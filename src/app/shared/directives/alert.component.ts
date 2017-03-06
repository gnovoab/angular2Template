
//Imports
import { Component } from '@angular/core';
import {AlertService} from "../service/alert.service";


/**
 * Class that represents alerts component
 */
@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent {

  //Fields
  message: any;

  /**
   * Constructor
   * @param alertService
   */
  constructor(private alertService: AlertService) { }

  /**
   * Init method
   */
  ngOnInit() {
      this.alertService.getMessage().subscribe(message => { this.message = message; });
  }
}
