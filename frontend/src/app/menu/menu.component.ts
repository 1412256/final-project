import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/drop-menu.js";

    this.elementRef.nativeElement.appendChild(s);

    var s1 = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/ziehharmonika.js";

    this.elementRef.nativeElement.appendChild(s1);
  }

}
