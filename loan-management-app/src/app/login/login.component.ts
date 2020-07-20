import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService} from '../_services/account.service';
//import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) {
    //private alertService: AlertService) {
     }

  ngOnInit(): void {
      this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
 // get return url from route parameters or default to '/'
 this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
// convenience getter for easy access to form fields
  get f() { return this.loginform.controls; }

    onSubmit() {
        this.submitted = true;
         // reset alerts on submit
         //this.alertService.clear();
        // stop here if form is invalid
        if (this.loginform.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['/search']);
            },
            error => {
                //this.alertService.error(error.error.message);
                //this.loading = false;
                alert("Invalid username/password");
            });
    }

}
