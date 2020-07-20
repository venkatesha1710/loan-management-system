import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoanService} from '../_services/loan.service'
import {DataService} from '../_services/data.service'
import { CustomerDetails } from '../_models/customerdetails';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddLoanComponent implements OnInit {
  customerDetailModel  : CustomerDetails;
  constructor(private router: Router ,private loanService :LoanService) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    let dataService = new DataService();
    

    this.customerDetailModel = new CustomerDetails();
    this.customerDetailModel.firstName = form.value.addLoanData.firstName;
    this.customerDetailModel.lastName = form.value.addLoanData.lastName;
    this.customerDetailModel.loanNumber = form.value.addLoanData.loanNumber;
    this.customerDetailModel.address1 = form.value.addLoanData.address1;
    this.customerDetailModel.address2 = form.value.addLoanData.address2;
    this.customerDetailModel.city = form.value.addLoanData.city;

    //this.searchService.searchLoanDetail
    this.loanService.saveLoanDetails(this.customerDetailModel);
    
    
  }
}
