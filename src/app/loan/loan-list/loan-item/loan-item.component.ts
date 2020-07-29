import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';
import { Loan } from '../../model/loan';
import { LoanService } from '../../../services/loan.service';
import { PersistentService } from '../../../services/persistent.service';


@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.css']
})
export class LoanItemComponent implements OnInit {
  loanForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loan: Loan;
  getLoanForm(loanNumber) { 
    this.loan =  loanNumber;
    return this.formBuilder.group({
        loanNumber: [{value : this.loan.loanNumber,disabled: true},Validators.required],
        loanAmount: [this.loan.loanAmount, Validators.required],
        loanTerm: [this.loan.loanTerm, Validators.required],
        originationDate: [this.loan.originationDate, Validators.required],
        status: [this.loan.status, Validators.required],
        firstName: [this.loan.firstName, Validators.required],
        lastName: [this.loan.lastName, Validators.required]
    }) 
  } 
 
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private loanService: LoanService) {

   loanService.loanToBeEdited.subscribe(
       //(loanNumber: string) => { this.loans = loanService.getLoanByLoanNumber(loanNumber);this.loanForm = this.getLoanForm(loanNumber)}  
   )
  }
  ngOnInit() {
    this.loanForm = this.formBuilder.group({
        loanNumber: ['', Validators.required],
        loanAmount: ['', Validators.required],
        loanTerm: ['', Validators.required],
        originationDate: ['', Validators.required],
        status: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = '/list';
}

// convenience getter for easy access to form fields
get f() { return this.loanForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loanForm.invalid) {
        return;
    }

    this.loading = true;
    this.loanService.updateLoan(this.f.loanNumber.value,this.f.loanAmount.value, this.f.loanTerm.value, this.f.status.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                alert("Getting error while updating the loan");
            });
            this.loanService.isUpdated.emit(true);        
}

}
