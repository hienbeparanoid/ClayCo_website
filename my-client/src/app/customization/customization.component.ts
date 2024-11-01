import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent {
  constructor(private router: Router) {}

  startCustomizing() {
    this.router.navigate(['/customize-product-list']);
  }
}
