import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Category} from '../_model/category';
import {CategoryService} from '../_service/category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: any = {};
  constructor(private router: Router,private categoryService: CategoryService,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  createCategory(){
      let id = this.route.snapshot.params['id'];
      this.categoryService.createCategory(id , this.category)
        .subscribe(
          data => {
          
            this.router.navigate(['menu/'+id]);
        },
        error => {
          console.log("error");
        });
        
  }
}
