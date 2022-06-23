import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  searchValue: string = '';
  public totalProduct: number = 0;
  
  constructor(
    public router: Router,
    public snackBar: MatSnackBar,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalProduct = res.length;
    });
  }

  clearValue(): void {
    this.searchValue = ' ';
  }

  searchProduct(): void {
    if (!this.searchValue) {
      this.showMessage();
    } else {
      this.router.navigate(['/search', this.searchValue]);
    }
  }

  onSearchInput(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      this.searchProduct();
    }
  }

  showMessage(): void {
    this.snackBar.open('Please enter a fruit', '', { duration: 3000 });
    console.log('test');
    
  }
}
