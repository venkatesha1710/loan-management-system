import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { LoanService } from '../_services/loan.service';
import { LoanDetails } from '../_models/loandetails';


@Component({
  selector: 'app-editloan',
  templateUrl: './editloan.component.html',
  styleUrls: ['./editloan.component.css']
})
export class EditLoanComponent implements OnInit {
  
loanNumber:number;
loanType:String;
loanTerm:number;



resultData:LoanDetails;

  constructor(private router: Router ,private loanService :LoanService,private route: ActivatedRoute) { }
  loan:number;


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.loanNumber = params['loanNumber'];      
    });

    
    this.resultData = this.loanService.getLoanDetails(this.loanNumber);
    this.loanNumber = this.resultData.loanNumber;
    
    this.loanType = this.resultData.loanType;
    this.loanTerm = this.resultData.loanTerm;
   // this.amount = this.resultData.amount;

  }

  onSubmit(form :NgForm){
    
    var loanDetails = new LoanDetails();
    loanDetails.loanNumber = form.value.editLoanData.loanNumber;
    loanDetails.loanTerm = form.value.editLoanData.loanTerm;
    loanDetails.loanType = form.value.editLoanData.loanType;
    loanDetails.amount = form.value.editLoanData.amount;
    this.loanService.editLoanDetails(loanDetails);
    }
}
