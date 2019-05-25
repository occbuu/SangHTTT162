import { Component } from '@angular/core';

@Component({
  templateUrl: 'tables.component.html',
  styleUrls: ['./cards.component.css']
})
export class TablesComponent {
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
  data: any[] = [
    {
      id: 1,
      title: 'Quyết định 450-QĐ/TĐTN-BTNTH v/v ban hành Quy chế danh hiệu "Học sinh 3 rèn luyện thành phố Hồ Chí Minh"',
      type: '',
      img: 'word.png',
      download: 313,
      date: '24/08/2017'
    },
    {
      id: 2,
      title: 'Quyết định 2051-QĐ/TĐTN-BTN Phân bổ đại biểu dự Đại hội Cháu ngoan Bác Hồ thành phố năm 2017 Chủ đề “Thiếu nhi Thành phố học tập tốt, rèn luyện chăm”',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2017'
    },
    {
      id: 3,
      title: 'Quyết định 2417-QĐ/TĐTN-VP v/v thành lập 10 Tổ đại biểu tham dự Đại hội đại biểu Đoàn TNCS Hồ Chí Minh thành phố Hồ Chí Minh lần thứ X, nhiệm kỳ 2017 - 2022',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/07/2017'
    },
    {
      id: 4,
      title: 'Quyết định 1701-QĐ/TĐTN-BMT.ANQP.ĐBDC v/v ban hành Quy chế Giải thưởng "Doanh nhân trẻ xuất sắc TP.Hồ Chí Minh" sửa đổi, bổ sung năm 2016',
      type: '',
      img: 'word.png',
      download: 320,
      date: '24/08/2016'
    }
  ]

  download() {
    window.open('https://doc-0k-0k-docs.googleusercontent.com/docs/securesc/4bi89q6e32qvu2usq4b1sro6d55t2g4r/kk5i673ca6v5g8cljo4guqku7a6556n7/1558454400000/01120937587759455608/01120937587759455608/1nm-ZPsobWcy1pR92WWQocfKWdvrDOSW9?e=download', '_blank');
  }
}
