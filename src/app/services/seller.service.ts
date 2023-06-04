import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';
import {SignUp} from '../data-type';
import {login} from '../data-type';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)



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
  userLogin(data:login){
    console.warn("hy hi",data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home']);
      }else{
        console.warn("login failed");
        this.isLoginError.emit(true);
      }
    })
  }

}
 