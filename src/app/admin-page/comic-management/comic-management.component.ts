// src/app/comic-management/comic-management.component.ts
import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/comic.service';

@Component({
  selector: 'app-comic-management',
  templateUrl: './comic-management.component.html',
  styleUrls: ['./comic-management.component.css']
})
export class ComicManagementComponent implements OnInit {
  comics: any[] = [];

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comicService.getComics().subscribe({
      next: (data: any[]) => {
        this.comics = data;
        console.log('Danh sách truyện:', data);
      },
      error: (error: any) => {
        console.error('Lỗi khi gọi API:', error);
      }
    });
  }
  
}
