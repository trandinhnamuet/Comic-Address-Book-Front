import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent {
  accounts: any[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      (data: any[]) => {
        this.accounts = data;
        console.log('Danh sách tài khoản:', data); // In ra danh sách tài khoản nhận được từ API
      },
      error => {
        console.error('Lỗi khi gọi API:', error); // In ra lỗi nếu có
      }
    );
  }
}
