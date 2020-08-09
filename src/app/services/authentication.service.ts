import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../loan/model/user';
import { Profile } from '../loan/model/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    isAdmin = new EventEmitter<boolean>();

    
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Message: ${error.error.reason}`;
        }
        return throwError(errorMessage);
    }

    login(username, password): Observable<User> {
        const headers = { 
            'Access-Control-Allow-Origin': 'http://localhost:4200/*',
             'Access-Control-Allow-Methods': 'GET', 
             'Access-Control-Allow-Headers':'Origin'};
        return this.http.get<User>(`${environment.apiUrl}/users/signin?username=${username}&password=${password}`, { headers })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }), catchError(val => this.handleError(val)));

    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    register(firstName, lastName, email, phoneNumber, userName, password, role): Observable<Profile>{
        const headers = { 
            'Access-Control-Allow-Origin': 'http://localhost:4200/*',
             'Access-Control-Allow-Methods': 'POST', 
             'Access-Control-Allow-Headers':'Origin'};
        return this.http.post<Profile>(`${environment.apiUrl}/users/register`, { firstName, lastName, email, phoneNumber, userName, password, role, headers })
    }
}

