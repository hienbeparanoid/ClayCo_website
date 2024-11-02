import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  activeTab: string = 'vision'; // Thiết lập giá trị mặc định là "vision"

  toggleTab(tab: string) {
    this.activeTab = tab;
  }
}
