// Trong profile.component.ts
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  account: any = null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccountInfo();
  }

  getAccountInfo(): void {
    console.log('Getting Account Info');
    const accountID = this.accountService.getAccountID();
    if (accountID !== -1) {
      this.accountService.getAccountById(accountID).subscribe({
        next: (data) => {
          this.account = data[0];
        },
        error: (error) => {
          console.error('Error fetching account info', error);
        },
        complete: () => {
          console.log('Account fetching complete ' + accountID);
        }
      });
    } else {
      console.log('No account ID found');
    }

    console.log("Account Service: " + localStorage.getItem('accountID') + "-" + localStorage.getItem('accountName') + "?" + localStorage.getItem('accountType') + ">" + localStorage.getItem('showName'));
  }
}
