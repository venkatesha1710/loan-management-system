import { Injectable } from '@angular/core';
import { CustomerDetails } from '../_models/customerdetails';
import { LoanDetails } from '../_models/loandetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static instance: DataService;
  userName:String;
  loan :Array<CustomerDetails> = new Array();
  loanDetailsAry :Array<LoanDetails> = new Array();  
  


  constructor() {
    return DataService.instance = DataService.instance || this;
  }

  setInitialCustomerDetailData(){
    var customerDetails = new CustomerDetails();
    customerDetails.firstName = 'rabo';
    customerDetails.lastName = 'bank';
    customerDetails.loanNumber = 1001;
    customerDetails.address1 = 'addr1';
    customerDetails.address2 = 'addr2';
    customerDetails.city = 'chennai';
    customerDetails.amount = 2000;
    this.loan.push(customerDetails);

    customerDetails = new CustomerDetails();
    customerDetails.firstName = 'discover';
    customerDetails.lastName = 'bank';
    customerDetails.loanNumber = 1002;
    customerDetails.address1 = 'addr1';
    customerDetails.address2 = 'addr2';
    customerDetails.city = 'mumbai';
    customerDetails.amount = 5000;
    this.loan.push(customerDetails);
  }

  setCustomerLoan(){
    var loanDetails = new LoanDetails();
    loanDetails.loanNumber = 1001;
    loanDetails.loanTerm = 10;
    loanDetails.loanType = 'Home Loan';

    this.loanDetailsAry.push(loanDetails);


    loanDetails = new LoanDetails();
    loanDetails.loanNumber = 1002;
    loanDetails.loanTerm = 20;
    loanDetails.loanType = 'Home Loan';
    this.loanDetailsAry.push(loanDetails);

  }
  
}