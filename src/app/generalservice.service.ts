import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  setLoginDataList: any;
  private routePermissions: { [key: string]: string[] } = {
    'newuser': ['user',],
      'exituser': ['user'],
      'home': ['user',],
      'about': ['user'],
      'contact': ['user',],
      'employeeDetails': ['admin'],
      'employeeForm': ['admin'],
    // Add other route-role mappings as needed
  };
  constructor() { }
getAllowedRoles(routePath: string): string[] {
    return this.routePermissions[routePath] || [];
  }

  setLoginData(data:any){

  this.setLoginDataList = data;
  console.log("this.setLoginDataList",this.setLoginDataList)
  }
  getLoginData(){

   return  this.setLoginDataList 
    }
}
