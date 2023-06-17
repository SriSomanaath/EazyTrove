import { Component,OnInit } from '@angular/core';
import {order} from '../data-type';
import { Router} from '@angular/router';
import { ProductService } from '../services/product.service';
import {priceSummary} from '../data-type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  totalPrice:number | undefined;

  constructor(private product:ProductService,private router:Router){}

  ngOnInit():void{ 
    this.product.currentCart().subscribe((result)=>{
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      });

      this.totalPrice = price + (price / 10) + 100 - (price / 10);
      console.warn(this.totalPrice);

      })
  }


  orderNow(data: { email: string, address: string, contact: string }) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;

    if (this.totalPrice) {
      let orderData: order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined
      }
      this.product.orderNow(orderData).subscribe((result) => {
        if(result){
          alert('Order placed');
          this.router.navigate(['/my-orders']);
        }
      })
    }
  }
}
