import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    BenefitsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
