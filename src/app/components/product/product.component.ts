import { Component, Input, inject } from '@angular/core';
import { Product } from '../../model/produc.model'
import { ApiService } from '../../api/api.services';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    public productservice = inject(ApiService)

    title = 'Titulo en product component'

}
