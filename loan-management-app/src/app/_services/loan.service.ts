import { Injectable } from '@angular/core';
import { CustomerDetails } from '../_models/customerdetails';
import { SearchService } from './search.service';
import { LoanDetails } from '../_models/loandetails';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})



export class LoanService{
  

  searchService:SearchService;
  constructor() { 
    
    
  }

  saveLoanDetails(customerDetails:CustomerDetails){
   
   let dataService = new DataService();
   dataService.loan.push(customerDetails);
     
  }

  editLoanDetails(loanDetails:LoanDetails){
    let dataService = new DataService();
    for(let dtl of dataService.loanDetailsAry){
      if(dtl.loanNumber == loanDetails.loanNumber){
        dtl.loanTerm = loanDetails.loanTerm;
        dtl.loanType = loanDetails.loanType;
      }
    }

    for(let loan of dataService.loan){
      if(loan.loanNumber == loanDetails.loanNumber){
        loan.amount = loanDetails.amount;
      }
    }

    

  }

  getLoanDetails(loanNumber :number){
    var dataService = new DataService();
    var result = null;
    for(var dtl of dataService.loanDetailsAry){
      if(dtl.loanNumber == loanNumber){
       result = dtl;
      }
    }

    for(var loan of dataService.loan){
      if(loan.loanNumber == loanNumber){
        result.amount = loan.amount;
      }
    }

    return result;

  }


}