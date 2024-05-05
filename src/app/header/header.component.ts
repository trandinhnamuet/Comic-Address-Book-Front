import { Component, OnInit  } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loggedIn: boolean = false;
  dropdownVisible: boolean = false;
  userName: string = '';
  avatarLink: string = '';

  constructor(public dialog: MatDialog, private accountService: AccountService) {
    this.userName = localStorage.getItem('showName') || 'Giá trị mặc định';
    this.avatarLink = localStorage.getItem('accountAvatarLink') || "";
    console.log("Duong dan den anh avatar:  " + this.avatarLink)
  }

  ngOnInit(): void {
    this.updateLoginStatus();
  }

  //Mở dialog đăng nhập
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog đã đóng với kết quả: ${result}`);
    });
  }
  
  //Mở dialog đăng ký
  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog đã đóng với kết quả: ${result}`);
    });
  }

  //Cập nhật trạng thái đăng nhập
  updateLoginStatus(): void {
    const accountID = this.accountService.getAccountID();
    this.loggedIn = accountID > 0;
  }

  signout(): void {
    this.accountService.setAccountID(-1);
    window.location.reload();
  }

  toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown == null) return;
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
}
