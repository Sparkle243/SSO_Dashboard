import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  setLoginDataList: any;
  
  constructor() { }


  setLoginData(data:any){

  this.setLoginDataList = data
  }
  getLoginData(){

   return  this.setLoginDataList 
    }
}
