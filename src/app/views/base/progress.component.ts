import {Component, OnDestroy} from '@angular/core';

@Component({
  templateUrl: 'progress.component.html',
  styleUrls: ['./cards.component.css']
})
export class ProgressComponent{
  data: any[] = [
    {
      id: 1,
      title: 'Báo cáo 128-BC/TĐTN-BCNLĐ về kết quả tổ chức các hoạt động tăng cường xây dựng và củng cố hoạt động Đoàn tại các doanh nghiệp ngoài khu vực nhà nước và đơn vị sự nghiệp ngoài công lập năm 2019',
      type: '',
      img: 'word.png',
      download: 310,
      date: '25/05/2019'
    },
    {
      id: 2,
      title: 'Báo cáo 127-BC/TĐTN-VP về công tác Đoàn và phong trào thanh thiếu nhi Thành phố tháng 4 năm 2019',
      type: '',
      img: 'word.png',
      download: 320,
      date: '24/05/2019'
    },
    {
      id: 3,
      title: 'Báo cáo 125-BC/TĐTN-VP về kết quả thực hiện Tháng Thanh niên năm 2019, chủ đề "Thanh niên tình nguyện vì cộng đồng"',
      type: '',
      img: 'word.png',
      download: 340,
      date: '23/05/2019'
    },
    {
      id: 4,
      title: 'Báo cáo 120-BC/TĐTN-BCNLĐ tổng kết 10 năm thực hiện Cuộc vận động "Người Việt Nam ưu tiên dùng hàng Việt Nam" giai đoạn 2009 - 2019',
      type: '',
      img: 'word.png',
      download: 357,
      date: '22/05/2019'
    }
  ]
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }

  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }
}
