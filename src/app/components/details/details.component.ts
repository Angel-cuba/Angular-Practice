import { Component, inject } from '@angular/core';
import { ApiService } from '../../api/api.services';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 public productservice = inject(ApiService)
}
