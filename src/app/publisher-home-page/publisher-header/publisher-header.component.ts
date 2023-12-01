import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-publisher-header',
  templateUrl: './publisher-header.component.html',
  styleUrls: ['./publisher-header.component.css']
})

export class PublisherHeaderComponent {
  faHome = faHome;
}
