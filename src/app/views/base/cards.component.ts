import { Component } from '@angular/core';

@Component({
  templateUrl: 'cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  data : any[] = [
    {
      id: 1,
      title: 'Thông báo 876-TB/TĐTN-BTNTH Thông báo số 04 Hội thi Olympic các môn khoa học Mác - Lênin, Tư tưởng Hồ Chí Minh "Tầm nhìn xuyên thế kỷ" lần 10 năm 2019',
      type: '',
      img: 'word.png',
      download: 360,
      date: '25/05/2019'
    },
    {
      id: 2,
      title: 'Thông báo 875-TB/TĐTN-BTC v/v tham dự Chương trình biểu diễn vở kịch "Cánh đồng rực lửa"',
      type: '',
      img: 'word.png',
      download: 360,
      date: '25/05/2019'
    },
    {
      id: 3,
      title: 'Thông báo 870-TB/TĐTN-BTNTH V/v triển khai đăng ký tham gia Chiến dịch tình nguyện Hoa phượng đỏ Lần thứ 14 - năm 2019',
      type: '',
      img: 'word.png',
      download: 315,
      date: '24/05/2019'
    },
    {
      id: 4,
      title: 'Thông báo 868-TB/TĐTN-BTN v/v tổ chức tập huấn phụ trách thiếu nhi địa bàn toàn thành năm 2019',
      type: '',
      img: 'word.png',
      download: 250,
      date: '23/05/2019'
    }
  ]
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }

  download() {
    window.open('https://doc-0k-0k-docs.googleusercontent.com/docs/securesc/4bi89q6e32qvu2usq4b1sro6d55t2g4r/kk5i673ca6v5g8cljo4guqku7a6556n7/1558454400000/01120937587759455608/01120937587759455608/1nm-ZPsobWcy1pR92WWQocfKWdvrDOSW9?e=download', '_blank');
  }

}
