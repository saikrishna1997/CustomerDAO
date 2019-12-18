import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {agent} from './agent';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { HttpClient } from '@angular/common/http';
import { AgentserviceService } from './agentservice.service';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
 title = 'grid-example-app';
  custArray: Array<agent> = new Array();
  getData:any[];
  private gridApi;
  private gridColumnApi;
  //private columnDefs;
  private rowData;
  public tempId = 0;
  public btnVal = "Submit";


  /**/

  


  model = new agent(' ',' ',' ',0,' ',' ',' ',' ',' ')

  columnDefs = [
        {  headerName: "employee_id",field: "employee_id",sortable:true,filter:true,checkboxSelection:true },
        {  headerName: "employee_name",field: "employee_name",sortable:true,filter:true },
        {  headerName: "dob",field: "dob", sortable:true,filter:true  },
        {  headerName: "contact",field: "contact",sortable:true,filter:true },
        {  headerName: "mail",field: "mail",sortable:true,filter:true },
        {  headerName: "username",field: "username",sortable:true,filter:true },
        {  headerName: "password",field: "password",sortable:true,filter:true },

        {  headerName: "employee_role",field: "employee_role",sortable:true,filter:true },
        {  headerName: "branch_id",field: "branch_id",sortable:true,filter:true },
          
       ];
  


    constructor(private router:Router,private _httpService:AgentserviceService,private http: HttpClient) {} 

    

    ngOnInit() {
        this.rowData = this.http.get('http://localhost:8082/B_Employee');
    }

    modules = AllCommunityModules;

    onGridReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
   
    onTestGet(){
      this._httpService.getUserDetails()
      .subscribe((res:any[])=>{
        console.log(res);
        this.getData=res;
      });
    }

    onRemoveSelected(){
      var selectedData=this.gridApi.getSelectedRows();
      console.log(selectedData[0].employee_id);
      this._httpService.delAgent(selectedData[0].employee_id)
      .subscribe(data=>console.log(data), error=>console.log(error));
      location.reload();
    }



    
  }


    
  

