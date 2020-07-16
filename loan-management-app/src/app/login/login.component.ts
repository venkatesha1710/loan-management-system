import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private router: Router) { }

  ngOnInit(): void {
      this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
// convenience getter for easy access to form fields
  get f() { return this.loginform.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginform.invalid) {
            return;
        }
        this.loading = true;
        this.router.navigate(['/search']);
      }

}
