import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  categories = [
    {
      title: 'Find a boutique',
      content: [
        { text: 'Parfums Christian Dior Boutiques', url: '/parfums-boutique' },
        { text: 'Christian Dior Couture Boutiques', url: '/couture-boutiques' },
      ],
    },
    {
      title: 'Client Services',
      content: [
        { text: 'Contact us', url: '/contact' },
        { text: 'Delivery & Returns', url: '/delivery' },
        { text: 'FAQ', url: '/faq' },
      ],
    },
    {
      title: 'Maison Dior',
      content: [
        { text: 'Dior Sustainability', url: '/sustainability' },
        { text: 'Ethics & Compliance', url: '/ethics' },
        { text: 'Careers', url: '/careers' },
      ],
    },
    {
      title: 'Legal',
      content: [
        { text: 'Legal Terms', url: '/legal' },
        { text: 'Privacy Policy', url: '/policy' },
        { text: 'General Sales Conditions', url: '/conditions' },
        { text: 'Cookie Management', url: '/cookies' },
      ],
    },
  ];

  accordionOpen: boolean[] = [false, false, false, false];

  toggleAccordion(index: number) {
    this.accordionOpen[index] = !this.accordionOpen[index];
  }
}
