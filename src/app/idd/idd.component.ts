import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-idd',
  templateUrl: './idd.component.html',
  styleUrls: ['./idd.component.scss'],
})
export class IddComponent implements OnInit {
  id = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
}
