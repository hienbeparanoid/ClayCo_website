import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  standalone: true, // Add this line for standalone component
  imports: [NgIf, NgClass], // Import NgIf and NgClass
})
export class AboutUsComponent {
  activeTab: string = 'vision';

  toggleTab(tab: string) {
    this.activeTab = tab;
  }
}
