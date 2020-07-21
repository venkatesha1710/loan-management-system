import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../loan/model/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    
    constructor() {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password): Observable<User> {
        let user :User;
        if(username == 'admin' && password == 'pwd'){
            user = new User(1, 'admin', 'pwd', 'rabo', 'kumar', '3278grw2', 'admin')
            this.currentUserSubject.next(user);
        }
        if(username == 'test' && password == 'user'){
            user = new User(2, 'test', 'user', 'cog', 'nesh', '242bfd3', 'normal')
            this.currentUserSubject.next(user);
        }
        return new Observable((observer) => {
            if(user){
                localStorage.setItem('currentUser', JSON.stringify(user));
                observer.next(user);
            } else {
                observer.error("error");
            }
        });
    }            

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    register(user: Observable<User>) {
        return new Observable((observer) => {
            if(user){
                localStorage.setItem('currentUser', JSON.stringify(user));
                observer.next(user);
            } else {
                observer.error("error");
            }
        });
    }
}

