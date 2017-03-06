
//Imports
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/domain/index';
import { UserService } from '../../shared/service/index';

/**
 * Home class
 */
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  //Fields
  currentUser: User;
  users: User[] = [];

  /**
   * Cnstructor
   * @param userService
   */
  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  /**
   * Init method
   */
  ngOnInit() {
      this.loadAllUsers();
  }

  /**
   * Load all users
   */
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

  /**
   * Delete function
   * @param id
   */
  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }


}
