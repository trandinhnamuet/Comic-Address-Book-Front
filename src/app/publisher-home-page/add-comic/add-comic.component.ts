import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.css']
})
export class AddComicComponent {
  // Khai báo biến comicForm ở đây
  comicName: string = '';
  comicLink: string = '';
  alternativeName: string = '';
  author: string = '';
  translator: string = '';
  description: string = '';
  latestChapID: number = -1;
  latestUpdateTime: Date = new Date();
  avatarLink: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private accountService: AccountService, private sharedService: SharedService) {
  }

  addComic() {
    //Nếu avatarLink == '' thì đọc code html của đường dẫn comicLink lưu vào biến string HtmlCode
    //Đọc HtmlCode, tìm đường dẫn đến ảnh avatar truyện và lưu vào biến

    var val = {
      comicID: 0,
      comicName: this.comicName,
      comicLink: this.comicLink,
      translator: this.translator,
      accountID: this.accountService.getAccountID(),
      alternativeName: this.alternativeName,
      author: this.author,
      description: this.description,
      latestChapID: this.latestChapID,
      latestUpdateTime: this.latestUpdateTime,
      avatarLink: this.avatarLink
    };
    
    this.sharedService.addComic(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
