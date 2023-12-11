import { Component, OnInit } from '@angular/core';
import { product } from '../productmodel';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  data:any|product[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.displayproducts();
  }

  displayproducts(){
    this.api.getProduct().subscribe(res=>{
      this.data = res;
      console.log(res)
    })
  }

  addtocart(item:product){
    this.api.addtocart(item);
  }

  removeitem(item:product){
    this.api.removecartitem(item);
  }

}