import { Component } from '@angular/core';

@Component({
  templateUrl: 'switches.component.html',
  styleUrls: ['./cards.component.css']
})
export class SwitchesComponent {
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
  data: any[] = [
    {
      id: 1,
      title: 'Công văn 1891-CV/TĐTN-VP v/v tăng cường các biện pháp phòng chống bệnh dịch tả heo Châu Phi trên địa bàn thành phố',
      type: '',
      img: 'word.png',
      download: 310,
      date: '24/05/2019'
    },
    {
      id: 2,
      title: 'Công văn 1861-CV/TĐTN-BMT.ANQP.ĐBDC v/v giao chỉ tiêu nợ quá hạn của nguồn vốn vay ủy thác từ Ngân hàng Chính sách xã hội năm 2019',
      type: '',
      img: 'word.png',
      download: 349,
      date: '23/05/2019'
    },
    {
      id: 3,
      title: 'Công văn 1815-CV/TĐTN-VP v/v sử dụng Áo thanh niên Việt Nam',
      type: '',
      img: 'word.png',
      download: 325,
      date: '22/05/2019'
    },
    {
      id: 4,
      title: 'Công văn 1676-CV/TĐTN-VP v/v tăng cường công tác vận động đoàn viên, thanh niên hiến máu tình nguyện năm 2019',
      type: '',
      img: 'word.png',
      download: 350,
      date: '21/05/2019'
    }
  ]

  download() {
    window.open('https://doc-0k-0k-docs.googleusercontent.com/docs/securesc/4bi89q6e32qvu2usq4b1sro6d55t2g4r/kk5i673ca6v5g8cljo4guqku7a6556n7/1558454400000/01120937587759455608/01120937587759455608/1nm-ZPsobWcy1pR92WWQocfKWdvrDOSW9?e=download', '_blank');
  }
}
