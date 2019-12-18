import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {

  constructor(private http:HttpClient,private _httpService: AgentserviceService) { }
  
  getUserDetails(){
  	return this.http.get
  	('http://localhost:8082/B_Employee');

  }

  delAgent(employee_id){
  	console.log(employee_id);
  	return this.http.delete('http://localhost:8082/delete/B_Employee/'+employee_id,employee_id);
  }


}

