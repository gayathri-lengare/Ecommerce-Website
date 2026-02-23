import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  getUser() {
    return JSON.parse(sessionStorage.getItem('user') || 'null');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('user');
  }

  logout() {
    sessionStorage.removeItem('user');
    this.toastr.info('Logged out successfully');
    this.router.navigate(['/login']);
  }

}