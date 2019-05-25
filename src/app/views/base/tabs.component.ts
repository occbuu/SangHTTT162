import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.component.html',
  styleUrls: ['./cards.component.css']
})
export class TabsComponent {
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
  data: any[] = [
    {
      id: 1,
      title: 'Lịch làm việc tuần lễ 21/2019 của Ban Thường vụ Thành Đoàn (Từ ngày 20/5/2019 đến ngày 26/5/2019)',
      type: '',
      img: 'word.png',
      download: 325,
      date: '24/05/2019'
    },
    {
      id: 2,
      title: 'Công văn 1891-CV/TĐTN-VP v/v tăng cường các biện pháp phòng chống bệnh dịch tả heo Châu Phi trên địa bàn thành phố',
      type: '',
      img: 'word.png',
      download: 346,
      date: '24/05/2019'
    },
    {
      id: 3,
      title: 'Thư mời 163-TM/TĐTN-BMT.ANQP.ĐBDC dự Chương trình sinh hoạt truyền thống "Điện Biên Phủ - Đường Trường Sơn, Bản hùng ca bất diệt"',
      type: '',
      img: 'word.png',
      download: 350,
      date: '24/05/2019'
    },
    {
      id: 4,
      title: 'Thông báo 876-TB/TĐTN-BTNTH Thông báo số 04 Hội thi Olympic các môn khoa học Mác - Lênin, Tư tưởng Hồ Chí Minh "Tầm nhìn xuyên thế kỷ" lần 10 năm 2019',
      type: '',
      img: 'word.png',
      download: 349,
      date: '24/05/2019'
    },
    {
      id: 5,
      title: 'Kế hoạch 133-KH/TĐTN-BCNLĐ v/v tăng cường xây dựng và củng cố hoạt động đoàn tại các doanh nghiệp ngoài khu vực nhà nước và đơn vị sự nghiệp ngoài công lập năm 2019 ',
      type: '',
      img: 'word.png',
      download: 334,
      date: '24/05/2019'
    }
  ]

  download() {
    window.open('https://doc-0k-0k-docs.googleusercontent.com/docs/securesc/4bi89q6e32qvu2usq4b1sro6d55t2g4r/kk5i673ca6v5g8cljo4guqku7a6556n7/1558454400000/01120937587759455608/01120937587759455608/1nm-ZPsobWcy1pR92WWQocfKWdvrDOSW9?e=download', '_blank');
  }
}
