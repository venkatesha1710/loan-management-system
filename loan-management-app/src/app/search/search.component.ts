import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import {SearchService} from '../_services/search.service'
import {SearchResult} from "../_models/searchdetails"
import {DataService} from '../_services/data.service'
import { AccountService} from '../_services/account.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultList:Array<SearchResult>;
  constructor(private searchService:SearchService, private router: Router,private accountService: AccountService) { }

  ngOnInit(): void {
  }

onSubmit(form :NgForm) {
  let dataService = new DataService();
    
  this.resultList = this.searchService.searchLoanDetail(form.value.searchData.firstName,
    form.value.searchData.lastName,form.value.searchData.loanNumber);
}

onEdit(loanNumber:Number){
    
  this.router.navigate(['/editloan'], { queryParams: { loanNumber: loanNumber } });

}
logout() {
  this.accountService.logout();
}
}