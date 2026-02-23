import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {

    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSignup() {

    if (this.signupForm.invalid) {
      this.toastr.warning('Please fill all required fields');
      return;
    }

    const { password, confirmPassword } = this.signupForm.value;

    if (password !== confirmPassword) {
      this.toastr.error('Passwords do not match!');
      return;
    }

    // Store user in session storage 
    const userData = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    sessionStorage.setItem('registeredUser', JSON.stringify(userData));

    this.toastr.success('Registration Successful! Please login.');

    
  }

  goToLogin() {
  this.router.navigate(['/login']);
}

}