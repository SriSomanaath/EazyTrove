import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';
import {SignUp} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
 constructor(private http:HttpClient,private router:Router) {} 
  userSignUp(data:SignUp){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
    localStorage.setItem('seller',JSON.stringify(result.body))
    this.router.navigate(['seller-home']);
    this.isSellerLoggedIn.next(true); 
    console.log("result",result);
    });
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

}
 