import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { User } from '../_model/user';
import { UserService } from '../_service/user.service';
import { ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor(private userService: UserService, private elementRef: ElementRef, private route: ActivatedRoute, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {

    /* this.load(); */

  }

  /* load() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/JiSlider.js";
    this.elementRef.nativeElement.appendChild(s);

    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "../assets/js/slide-banner.js";
    this.elementRef.nativeElement.appendChild(s1);
  } */
}
