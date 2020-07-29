import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../loan/model/user';
import { Loan } from '../loan/model/loan';
import { v4 as uuidv4 } from 'uuid';
import { Person } from '../loan/model/person';
import { Address, Lien } from '../loan/model/models';
import { PersistentService } from './persistent.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoanService {
    

    constructor(private persistentService: PersistentService, private http: HttpClient) {
    }

    loanToBeEdited = new EventEmitter<string>();
    isUpdated = new EventEmitter<boolean>();
    saveLoan(loanAmount, loanTerm, originationDate, status, firstName, lastName): Observable<Loan>{
        const headers = { 
            'Access-Control-Allow-Origin': 'http://localhost:4200/*',
             'Access-Control-Allow-Methods': 'POST', 
             'Access-Control-Allow-Headers':'Origin'};
        return this.http.post<Loan>(`${environment.apiUrl}/api/addloan`, { loanAmount, loanTerm, originationDate, status, firstName, lastName, headers })
    } 

    updateLoan(loanNumber, loanAmount, loanTerm, status): Observable<Loan>{
        const headers = { 
            'Access-Control-Allow-Origin': 'http://localhost:4200/*',
             'Access-Control-Allow-Methods': 'POST', 
             'Access-Control-Allow-Headers':'Origin'};
        return this.http.post<Loan>(`${environment.apiUrl}/api/updateloan`, { loanNumber,loanAmount, loanTerm, status, headers })
    }

    getLoans(): Observable<Loan>{
        const headers = { 
            'Access-Control-Allow-Origin': 'http://localhost:4200/*',
             'Access-Control-Allow-Methods': 'GET', 
             'Access-Control-Allow-Headers':'Origin'};
        return this.http.get<Loan>(`${environment.apiUrl}/api/loanslist`, { headers })
    }

    getLoanByLoanNumber(loanNumber): Observable<Loan[]>{
        const headers = { 
            'Access-Control-Allow-Origin': 'http://localhost:4200/*',
             'Access-Control-Allow-Methods': 'GET', 
             'Access-Control-Allow-Headers':'Origin'};
        return this.http.get<Loan[]>(`${environment.apiUrl}/api/getLoanInfo/${loanNumber}`, { headers })
    }
}