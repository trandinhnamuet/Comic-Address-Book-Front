import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  userName: string = '';
  avatarLink: string = '';
  constructor(private accountService: AccountService) { 
    this.avatarLink = localStorage.getItem('accountAvatarLink') || '';
    const showName = localStorage.getItem('showName');
      if (showName !== null) {
        this.userName = showName;
      } else {
        // Xử lý trường hợp không tìm thấy 'showName' trong localStorage
        this.userName = ''; // hoặc một giá trị mặc định khác
      }
  }

}
