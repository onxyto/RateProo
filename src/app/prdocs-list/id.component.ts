import { routes } from './../app.routes';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.warn('product id', this.route.snapshot.paramMap.get('id'));
    this.Productdetail = this.route.snapshot.paramMap.get('id');
  }
}
