import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { ApiService } from './api/api.services';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductComponent]
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService){}
  ngOnInit(): void {

  }
  title = 'test-app';

  changeTitle() {
    this.title = 'change the title';
  }
}
