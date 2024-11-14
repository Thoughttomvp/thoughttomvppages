import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { PricesSectionComponent } from '../../components/prices-section/prices-section.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerComponent,
    BenefitsComponent,
    PricesSectionComponent,
    FaqSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
