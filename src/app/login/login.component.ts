import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;   //  Declare first

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {

    //  Initialize inside constructor
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onLogin() {

    if (this.loginForm.invalid) {
      this.toastr.warning('Please fill all required fields');
      return;
    }

    const user = this.loginForm.value;

    sessionStorage.setItem('user', JSON.stringify(user));

    this.toastr.success('Login Successful!', 'Welcome');

    this.router.navigate(['/home']);
  }

}