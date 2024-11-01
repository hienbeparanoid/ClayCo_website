import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cosmetics } from '../../Interfaces/Cosmetic';
import { CosmeticService } from '../../SERVICES/cosmetic.service';
import { CategoryService } from '../../SERVICES/category.service';

@Component({
  selector: 'app-customize-product-detail',
  templateUrl: './customize-product-detail.component.html',
  styleUrls: ['./customize-product-detail.component.css']
})
export class CustomizeProductDetailComponent {
  selectedCategory: string = '';
  categories: any[] | undefined;
  cosmetics: any;
  cosmetic = new Cosmetics();
  errMessage: string = '';

  constructor(
    public _service: CosmeticService,
    public _fs: CategoryService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let category = param.get('category');
      if (category != null) {
        this.selectCategory(category);
      }
    });
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._service.getCosmetics().subscribe({
      next: (data) => {
        this.cosmetics = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this._fs.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(cos: any): void {
    cos.quantity = 1;
    this._service.addToCart(cos).subscribe(
      (response: any) => {
        console.log(response);
        alert("Product added to cart successfully!");
        window.location.reload();
        // Thêm sản phẩm vào giỏ hàng thành công
      },
      (error: any) => {
        console.log(error);
        // Xảy ra lỗi khi thêm sản phẩm vào giỏ hàng
      }
    );
  }

  goToCustomizing() {
    this.router.navigate(['/customizing']);
  }
}
