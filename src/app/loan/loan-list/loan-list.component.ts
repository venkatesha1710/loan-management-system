import { Component, OnInit, ViewChild } from '@angular/core';
import { Loan } from '../model/loan';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import { LoanService } from '../../services/loan.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})

export class LoanListComponent implements OnInit {
  loans: Loan[];
  isAdmin: boolean = false;
  isListOnly = true;
  dataSource: MatTableDataSource<Loan>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private loanService: LoanService, private authenticationService: AuthenticationService ) {

    loanService.isUpdated.subscribe(
      (status: boolean) => {if(status){
        this.loadLoans();
        this.isListOnly = true;}} 
  )
  }
  
  
  checkAdmin(){
    if(this.authenticationService.currentUserValue)
    this.isAdmin =  this.authenticationService.currentUserValue.role == "admin";
  }
  
  
  edit(loanNumber: string){
    this.isListOnly = false;
    this.emitLoan(loanNumber);
  }
  emitLoan(loanNumber: any) {
    this.loanService.loanToBeEdited.emit(this.dataSource.data.filter(loan => loan.loanNumber === loanNumber)[0]);
  }
 applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  loadLoans(){
    this.loanService.getLoans().subscribe((result: any) =>{
      this.dataSource = new MatTableDataSource<Loan>(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: Loan, filter: string) => {
    
        return (data.loanNumber.toString().includes(filter)||data.firstName.toLowerCase().includes(filter)||data.lastName.toLowerCase().includes(filter));
       };
    })
  }
  ngOnInit() {
    this.checkAdmin();
    console.log("yes");
    this.loadLoans();
    
    }

}
