import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cookie-warning',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cookie-warning.component.html',
  styleUrl: './cookie-warning.component.scss'
})
export class CookieWarningComponent {
  isCookieAccepted: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    this.isCookieAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    }
  }

  acceptCookies(): void {
    this.isCookieAccepted = true;
    localStorage.setItem('cookiesAccepted', 'true');
  }

}
