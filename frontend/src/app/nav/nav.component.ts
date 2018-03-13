import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { UserService } from '../_service/user.service';
import { ChangeDetectorRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: User;
  constructor(private userService: UserService, private cdRef: ChangeDetectorRef, private elementRef: ElementRef, private router: Router) {

  }
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

}
