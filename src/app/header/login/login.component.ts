import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  table:any=[];
  wrongPassword: boolean = false;

  constructor(private accountService: AccountService, public dialogRef: MatDialogRef<LoginComponent>) {}

  login() {
    const account:any = {  
      accountID: 0,
      accountName: this.username,
      password: this.password,
      accountType: "string",
      showName: "",
      accountAvatarLink: ""
    };
      
    this.accountService.login(account).subscribe(data => {
      this.table = data;

      console.log(this.table)
      console.log(this.table[0])
      
      if (this.table[0].Column1 == 0) {
        console.log("TK MK sai");
        this.wrongPassword = true;
      } else {
        console.log("Dang nhap thanh cong, accountID la " + this.table[0].Column2);
        this.wrongPassword = false;
        this.accountService.setAccountID(this.table[0].Column2);
        this.dialogRef.close();
        alert("Đăng nhập thành công");
        window.location.reload();
        console.log(this.accountService.getAccountID)
      }
    })
  }
}
