import { Component } from '@angular/core';

@Component({
  selector: 'app-publisher-header',
  templateUrl: './publisher-header.component.html',
  styleUrls: ['./publisher-header.component.css']
})
export class PublisherHeaderComponent {

  userName: string | null = localStorage.getItem('showName');

}
