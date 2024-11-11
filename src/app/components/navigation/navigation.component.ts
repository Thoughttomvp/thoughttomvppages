import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  desktopMenu = false
  mobileMenu = false

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
