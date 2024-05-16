import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountID: number = -1;
  // accountType: string = '';
  // accountName: string = '';
  // showName: string = '';
  // accountAvatarLink: string = '';

  readonly APIUrl = "http://localhost:5227/api";

  constructor(private http:HttpClient) {
    // Kiểm tra localStorage để xem nếu accountID đã tồn tại
    const storedAccountID = localStorage.getItem('accountID');
    if (storedAccountID) {
      this.accountID = parseInt(storedAccountID, 10);

      if (parseInt(storedAccountID) > 0) { // Nếu đã đăng nhập
        // Gọi getAccountById(this.accountID) rồi gán giá trị cho accountType, accountName, showName, accountAvatarLink
        this.getAccountById(this.accountID).subscribe(data => {
          localStorage.setItem('accountType', data[0].accountType);
          localStorage.setItem('accountName', data[0].accountName);
          localStorage.setItem('showName', data[0].showName);
          localStorage.setItem('accountAvatarLink', data[0].accountAvatarLink)
          // this.accountType = data[0].accountType;
          // this.accountName = data[0].accountName;
          // this.showName = data[0].showName;
          // this.accountAvatarLink = data[0].accountAvatarLink;

          console.log("Cập nhật giá trị account do đã đăng nhập")
          console.log(data);
          // console.log("Da dang nhap " + this.accountID + " " + this.accountName + " " + this.accountType + " " + this.showName);
        }); 
      } else {
        localStorage.removeItem('accountType');
        localStorage.removeItem('accountName');
        localStorage.removeItem('showName');
        localStorage.removeItem('accountAvatarLink');

        // this.accountType = '';
        // this.accountName = '';
        // this.showName = '';
        // this.accountAvatarLink = '';
      }
    }
  }

  getAccountID(): number {
    return this.accountID;
  }

  setAccountID(accountID: number): void {
    this.accountID = accountID;
    // Lưu accountID vào localStorage
    localStorage.setItem('accountID', accountID.toString());
  }

  login(val:any):Observable<any[]> {
    return this.http.post<any>(this.APIUrl+'/Login', val)
  }

  // login(val:any): any {
  //   return this.http.post<any>(this.APIUrl+'/Login', val);
  // }
  //

  getAccountById(accountID: number): Observable<any> {
    return this.http.get<any>(`${this.APIUrl}/account/${accountID}`);
  }

  checkAccountExists(accountNameInput: string): Observable<any> {
    return this.http.get(`${this.APIUrl}/Login/${accountNameInput}`);
  }

  registerAccount(account: any): Observable<any> {
    return this.http.post(`${this.APIUrl}/account`, account);
  }

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + "/account");
  }
} 