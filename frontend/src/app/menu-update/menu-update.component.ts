import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../_model/menu';
import { MenuService } from '../_service/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.css']
})
export class MenuUpdateComponent implements OnInit {
  menu: any = {};
  constructor(private router: Router, private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  updateMenu() {
    let id = this.route.snapshot.params['id'];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.menu.creator = currentUser.user;
    this.menuService.updateMenu(this.menu, id)
      .subscribe(
        data => {

          this.router.navigate(['/manager']);
        },
        error => {
          console.log("error");
        });

  }
}
