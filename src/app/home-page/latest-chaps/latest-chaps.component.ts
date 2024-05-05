// import { Component } from '@angular/core';
// import { SharedService } from 'src/app/shared.service';

// @Component({
//   selector: 'app-latest-chaps',
//   templateUrl: './latest-chaps.component.html',
//   styleUrls: ['./latest-chaps.component.css']
// })
// export class LatestChapsComponent {
//   comicTags: any[] = [];
//   constructor(private sharedService: SharedService) {}

//   ngOnInit(): void {
//     this.sharedService.getLatestChapters().subscribe({
//       next: (data) => {
//         this.comicTags = data;
//         console.log("fjgjvnnvjevkdvk" + this.comicTags[0].updateTime);
//         console.log(typeof this.comicTags[0].updateTime); // Sẽ in ra 'string' hoặc 'object', tùy thuộc vào dữ liệu
     
//       },
//       error: (error) => {
//         console.error('Có lỗi khi lấy dữ liệu:', error);
//       }
//     });

//     //Duyệt từng comicTag trong comicTags. Nếu comcTag.avatarLink chứa "assets" thì gán giá trị comicTags chỉ lấy phần text từng "assets" đến cuối thôi, bỏ phần trước "assets"
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FlexOffsetDirective } from '@angular/flex-layout';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-latest-chaps',
  templateUrl: './latest-chaps.component.html',
  styleUrls: ['./latest-chaps.component.css']
})
export class LatestChapsComponent implements OnInit {
  comicTags: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getLatestChapters().subscribe({
      next: (data) => {
        this.comicTags = data;
        
        for (let i = 0; i < this.comicTags.length; i++) {
          if (this.comicTags[i].avatarLink.includes('assets')) {
            const assetsIndex = this.comicTags[i].avatarLink.indexOf('assets');
            this.comicTags[i].avatarLink = this.comicTags[i].avatarLink.substring(assetsIndex);
          }
        } 
      },
      error: (error) => {
        console.error('Có lỗi khi lấy dữ liệu:', error);
      }
    });
  }
}
















