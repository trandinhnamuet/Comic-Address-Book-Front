import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Danh bạ Truyện';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // Kiểm tra nếu accountID chưa tồn tại trong localStorage, gán cho nó giá trị mặc định là -1
    if (this.accountService.getAccountID() === -1) {
      this.accountService.setAccountID(-1);
    }
  }
}
