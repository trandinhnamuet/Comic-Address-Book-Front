# Comic-Address-Book-Front
Front-end for Comic-Address-Book Project

# Cách chạy code
- Cài đặt Visual Studio Code (tải từ https://code.visualstudio.com/download)
- Cài đặt Angular
  + Cài đặt NodeJs (tải từ https://nodejs.org/en), npm sẽ được cài đặt kèm với NodeJs 
  + Cài Angular CLI toàn cục bằng lệnh: npm install -g @angular/cli
  + Tải code project về, mở folder chứa code project rồi chạy: ng serve
      VD: C:\AngularProject\comic-address-book>ng serve

# Mô tả chức năng
- Gồm 3 user interface areas: User - Người đọc, Publisher - Nhóm dịch, Admin - Quản trị viên trang web
- Trang User
  + Header: Thanh tìm kiếm, button điều hướng về trang chủ và cài đặt người dùng
  + Footer
  + Left bar: Nơi hiện những bài viết trong các hội nhóm truyện tranh
  + Right bar: Nơi phát và chọn nhạc
  + Trung tâm: Nơi hiện các thẻ link truyện. Khi bấm 1 thẻ link sẽ dẫn đến trang chứa thông tin của truyện đó: Nhóm dịch, tác giả, danh sách chapter, đường dẫn đến trang web nơi nhóm dịch đăng truyện đó. Click vào 1 chap cũng sẽ dấn đến link đọc chap đó ở trang web đăng truyện.
- Trang Publisher: Nơi nhóm dịch quản lý các link truyện của mình và quản lý thông tin nhóm dịch
  + Hồ sơ
  + Danh sách link truyện
  + Thêm link truyện
  + Thông báo
- Trang Admin
  + 
