import { Component } from '@angular/core';

@Component({
  templateUrl: 'carousels.component.html',
  styleUrls: ['./cards.component.css']
})
export class CarouselsComponent {
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
  data : any[] = [
    {
      id: 1,
      title: 'Thư mời 163-TM/TĐTN-BMT.ANQP.ĐBDC dự Chương trình sinh hoạt truyền thống "Điện Biên Phủ - Đường Trường Sơn, Bản hùng ca bất diệt"',
      type: '',
      img: 'word.png',
      download: 360,
      date: '25/05/2018'
    },
    {
      id: 2,
      title: 'Thư mời 162-TM/TĐTN-VP dự Đại hội Cháu ngoan Bác Hồ năm 2019 với chủ đề "Thiếu nhi thành phố làm theo 5 điều Bác Hồ dạy"',
      type: '',
      img: 'word.png',
      download: 355,
      date: '25/05/2018'
    },
    {
      id: 3,
      title: 'Thư mời 161-TM/TĐTN-VP Họp triển khai thực hiện Bộ tiêu chí đánh giá công tác Đoàn và phong trào TTN TP 2019 và lấy ý kiến góp ý thang điểm thi đua năm 2019 khu vực QH, CNLĐ, LLVT',
      type: '',
      img: 'word.png',
      download: 342,
      date: '24/05/2019'
    },
    {
      id: 4,
      title: 'Thư mời Chương trình tổng kết và trao Giải Hội thi "Học sinh - Sinh viên giỏi nghề" lần thứ 11 năm 2019',
      type: '',
      img: 'word.png',
      download: 350,
      date: '23/05/2018'
    }
  ]

  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }
}
