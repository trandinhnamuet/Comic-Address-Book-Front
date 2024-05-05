import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  accountNameInput: string = '';
  passwordInput: string = '';
  showName: string = '';

  constructor(private accountService: AccountService) { }

  checkAccount() {
    this.accountService.checkAccountExists(this.accountNameInput).subscribe({
      next: (response) => {
        if (response === 1) {
          alert('Tài khoản này đã tồn tại!');
        } else {
          alert('Tài khoản có thể được sử dụng.');
        }
      },
      error: (error) => {
        console.error('Có lỗi xảy ra khi kiểm tra tài khoản', error);
      }
    });
  }

  register() {
    // Kiểm tra xem tên tài khoản đã tồn tại chưa
    this.accountService.checkAccountExists(this.accountNameInput).subscribe({
      next: (response) => {
        // Nếu tên tài khoản đã tồn tại, thông báo cho người dùng
        if (response === 1) {
          alert('Tên tài khoản đã tồn tại!');
        } else {
          // Nếu tên tài khoản chưa tồn tại, tiến hành đăng ký
          const account = {
            accountID: -1, // Giả sử accountID -1 là giá trị mặc định cho tài khoản mới
            accountName: this.accountNameInput,
            password: this.passwordInput,
            accountType: 'user', // Giả sử loại tài khoản mặc định là 'user'
            showName: this.showName, // Đảm bảo đã khai báo và bind biến này trong component của bạn
            accountAvatarLink: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'
          };
  
          this.accountService.registerAccount(account).subscribe({
            next: () => {
              alert('Đăng ký thành công! Bạn có thể đăng nhập với tài khoản vừa đăng ký');
              window.location.reload();
            },
            error: (error) => {
              console.error('Có lỗi xảy ra khi đăng ký', error);
              alert('Có lỗi xảy ra, vui lòng thử lại sau.');
            }
          });
        }
      },
      error: (error) => {
        console.error('Có lỗi xảy ra khi kiểm tra tài khoản', error);
        alert('Có lỗi xảy ra, vui lòng thử lại sau.');
      }
    });
  }
  
}
