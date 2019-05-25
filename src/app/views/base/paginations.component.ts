import { Component, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  templateUrl: 'paginations.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  styleUrls: ['./cards.component.css']
})
export class PaginationsComponent {

  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
  data: any[] = [
    {
      id: 1,
      title: 'Kế hoạch 133-KH/TĐTN-BCNLĐ v/v tăng cường xây dựng và củng cố hoạt động đoàn tại các doanh nghiệp ngoài khu vực nhà nước và đơn vị sự nghiệp ngoài công lập năm 2019',
      type: '',
      img: 'word.png',
      download: 310,
      date: '25/05/2019'
    },
    {
      id: 2,
      title: 'Kế hoạch 132-KH/TĐTN-BQT tổ chức hoạt động tình nguyện hè tại nước Cộng hòa dân chủ nhân dân Lào năm 2019',
      type: '',
      img: 'word.png',
      download: 320,
      date: '24/05/2019'
    },
    {
      id: 3,
      title: 'Kế hoạch 131-KH/TĐTN-VP về cuộc thi Ý tưởng Sáng tạo trẻ Thành phố Hồ Chí Minh lần XI năm 2019, chủ đề “Ý tưởng, dự án tình nguyện”',
      type: '',
      img: 'word.png',
      download: 330,
      date: '23/05/2019'
    },
    {
      id: 4,
      title: 'Kế hoạch 130-KH/TĐTN-BCNLĐ tổ chức Chiến dịch tình nguyện Kỳ nghỉ hồng lần thứ 18 năm 2019',
      type: '',
      img: 'word.png',
      download: 350,
      date: '22/05/2019'
    }
  ]

  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }
}
