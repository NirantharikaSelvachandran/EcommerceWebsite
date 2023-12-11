import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../productmodel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  showproduct:any=[];
  myForm:FormGroup|any;
  public totalamount :number=0;
  public addressform = false;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showproduct = res;
      this.totalamount = this.api.calculateprice();
    })
    this.myForm = new FormGroup({
      email:new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
  }

  deleteitem(item:product){
    this.api.removecartitem(item);
  }

  empty(){
    this.api.removeallitems();
  }

  cancel(){
    this.addressform = false;
    this.myForm.rest();
  }

  onsubmit(){
    this.myForm.value;
    this.myForm.reset();
  }

}
