import {Component, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  templateUrl: 'popovers.component.html',
  styleUrls: ['./cards.component.css']
})
export class PopoversComponent {

  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }

  data: any[] = [
    {
      id: 1,
      title: 'Hướng dẫn 31-HD/TĐTN-BTG về tổ chức đợt sinh hoạt chính trị tháng 5 và tháng 9 năm 2019',
      type: '',
      img: 'word.png',
      download: 310,
      date: '25/05/2019'
    },
    {
      id: 2,
      title: 'Hướng dẫn 30-HD/TĐTN-VP đánh giá, phân loại và xếp loại thi đua cơ sở Đoàn khu vực trường học Đại học - Cao đẳng - Trung cấp năm học 2018 - 2019',
      type: '',
      img: 'word.png',
      download: 350,
      date: '24/05/2019'
    },
    {
      id: 3,
      title: 'Hướng dẫn 29-HD/TĐTN-BTG Công tác tuyên truyền và tổ chức các hoạt động kỷ niệm các sự kiện quan trọng trong Quý II năm 2019',
      type: '',
      img: 'word.png',
      download: 351,
      date: '23/05/2019'
    },
    {
      id: 4,
      title: 'Hướng dẫn 28-HD/TĐTN-BTC v/v tổ chức kết nạp đoàn viên "Lớp đoàn viên kỷ niệm 50 năm thực hiện Di chúc Chủ tịch Hồ Chí Minh" (1969 - 2019)',
      type: '',
      img: 'word.png',
      download: 340,
      date: '23/05/2019'
    }
  ]

  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }
}
