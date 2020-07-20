import { Injectable } from '@angular/core';
import {CustomerDetails} from "../_models/customerdetails"
import { ngModuleJitUrl } from '@angular/compiler';
import {SearchResult} from '../_models/searchdetails';
//import {LoanBaseService} from './loan-base.service'
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  

  loanDetails = 
  [{
    userName :'rahul',
	  loanNumber :1001,
    loanType :'HomeLoan',
    loanTerm:10,
    amount:1000,
    city:'Chennai'

  },
  {
    userName :'sachin',
	loanNumber :1002,
    loanType :'HomeLoan',
    loanTerm:15,
    amount:5000,
    city:'Mumbai'
  }
];

  constructor() { 
    let dataService = new DataService();
    dataService.setCustomerLoan();
    dataService.setInitialCustomerDetailData();
  }


  public searchLoanDetail(firstName:String,lastName:String,loanNumber:number){
    let resultList  = new Array<SearchResult>();
    let dataService = new DataService();
    let searchResult = null;
    for(let loan of dataService.loan){
      
      if(loan.firstName === firstName || loan.lastName === lastName || loan.loanNumber == loanNumber){
        searchResult = new SearchResult();
        searchResult.firstName = loan.firstName;
        searchResult.lastName = loan.lastName;
        searchResult.amount = loan.amount;
        searchResult.loanNumber = loan.loanNumber;
        searchResult.city=loan.city;
        resultList.push(searchResult);
      }
    }
    
    return resultList;
  }
}