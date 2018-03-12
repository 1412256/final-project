import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Category} from '../_model/category';
import {CategoryService} from '../_service/category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category: any = {};
  constructor(private router: Router,private categoryService: CategoryService,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  updateCategory(){
    
    let id = this.route.snapshot.params['id'];
    this.categoryService.updateCategory(this.category,id)
      .subscribe(
        data => {
        
          this.router.navigate(['category/'+id]);
      },
      error => {
        console.log("error");
      });
      
}
}
