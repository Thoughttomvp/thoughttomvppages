import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../src/app/components/footer/footer.component';
import { CookieWarningComponent } from '../../src/app/components/cookie-warning/cookie-warning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FooterComponent,
    CookieWarningComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thoughttomvppages';
}
