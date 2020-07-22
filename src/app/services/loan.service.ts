import { Injectable, EventEmitter } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { User } from '../loan/model/user';
import { Loan } from '../loan/model/loan';
import { v4 as uuidv4 } from 'uuid';
import { Person } from '../loan/model/person';
import { Address, Lien } from '../loan/model/models';
import { PersistentService } from './persistent.service';

@Injectable({ providedIn: 'root' })
export class LoanService {
    

    //constructor(private http: HttpClient) {
    constructor(private persistentService: PersistentService) {
    }

    // public get currentUserValue(): User {
    //     return this.currentUserSubject.value;
    // }
    loanToBeEdited = new EventEmitter<string>();
    isUpdated = new EventEmitter<boolean>();
    saveLoan(loanAmount, loanTerm, originationDate, status, firstName, lastName): Observable<Loan> {
        console.log("9999999999999999");
        console.log(originationDate);
        //let loanNumber = uuidv4();
        let loanNumber = "2"+this.getRandomNumber();
        console.log(loanNumber);
        let loan :Loan;
        loan = new Loan(loanNumber, loanAmount, loanTerm, new Date(originationDate), new Lien('Vehicle Lien', new Date(), 'House', 10000),new Person('1234', firstName, lastName, new Address('Urapakkam', 'Chennai')), status )
        this.persistentService.save(loan);
        return new Observable((observer) => {
            if(loan){
                observer.next(loan);
            } else {
                observer.error("error");
            }
        });
    } 
    updateLoan(loanNumber, loanAmount, loanTerm, originationDate, status, firstName, lastName): Observable<Loan> {
        console.log(loanNumber);
        let loan :Loan;
        loan = new Loan(loanNumber, loanAmount, loanTerm, new Date(originationDate), new Lien('Vehicle Lien', new Date(), 'House', 10000),new Person('1234', firstName, lastName, new Address('Urapakkam', 'Chennai')), status )
        this.persistentService.update(loan);
        return new Observable((observer) => {
            if(loan){
                observer.next(loan);
            } else {
                observer.error("error");
            }
        });
    }
    
    getRandomNumber(){
        return Math.floor(Math.random()*(9999999999-1000000000+1)+1000000000);
    }
}