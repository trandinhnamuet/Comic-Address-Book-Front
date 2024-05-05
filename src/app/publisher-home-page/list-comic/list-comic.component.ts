import { Component } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { PublisherService } from 'src/app/publisher.service';

@Component({
  selector: 'app-list-comic',
  templateUrl: './list-comic.component.html',
  styleUrls: ['./list-comic.component.css']
})
export class ListComicComponent {
  comics: any[] = []; //List<ComicTag>
  
  constructor(private publisherService: PublisherService, private accountService: AccountService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(): void {
    this.publisherService.getComicLinksByAccountId(this.accountService.getAccountID()).subscribe(comics => {
      this.comics = comics;
    });
  }

  //Hàm xóa truyện
  deleteComic(comicID: number): void {
    console.log("Danh sach truyen: ..vs.v.fb.df.b.dfb.df.bd..fb.d.bd.d.fb.dfb.d")
    console.log(this.comics)
    // Xác nhận xóa
    if (confirm('Bạn có chắc chắn muốn xóa truyện này không?')) {
      // Gọi service để xóa truyện
      this.publisherService.deleteComic(comicID).subscribe({
        next: (response) => {
          // Thông báo xóa thành công và cập nhật danh sách
          alert('Truyện đã được xóa thành công.');
          this.getComics();
          location.reload();
        },
        error: (err) => {
          // Xử lý lỗi tại đây
          console.error('Có lỗi xảy ra khi xóa truyện: ', err);
        }
      });
    }
  }
  
  
}
