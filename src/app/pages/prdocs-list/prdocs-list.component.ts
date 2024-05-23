import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CommonModule, NgForOf } from '@angular/common';
import { IonContent, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prdocs-list',
  templateUrl: './prdocs-list.component.html',
  styleUrls: ['./prdocs-list.component.scss'],
  standalone: true,
  imports: [IonItem, IonContent, CommonModule],
})
export class PrdocsListComponent implements OnInit {
  Productdetail: any = [];
  product: any;
  selectedProduct: any;

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.Productdetail = data;
    });
  }
}
