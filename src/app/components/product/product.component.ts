import { Component, Input, inject } from '@angular/core';
import { Product } from '../../model/produc.model'
import { ApiService } from '../../api/api.services';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ DetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


    title = 'Titulo en product component'

}
