import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';
   

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent,FormsModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcommerceWeb';
}
