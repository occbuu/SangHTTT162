import { Component } from '@angular/core';

@Component({
  templateUrl: 'forms.component.html',
  styleUrls: ['./cards.component.css']
})
export class FormsComponent {

  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
  data: any[] = [
    {
      id: 1,
      title: 'Bảng phân công nhiệm vụ Uỷ viên Ban thường vụ Đoàn Thanh niên 2014 - 2017',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2017'
    },
    {
      id: 2,
      title: 'Bảng phân công nhiệm vụ Uỷ viên Ban thường vụ Đoàn Thanh niên 2014 - 2017',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2017'
    },
    {
      id: 3,
      title: 'Bảng phân công nhiệm vụ Uỷ viên Ban thường vụ Đoàn Thanh niên 2014 - 2017',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2017'
    },
    {
      id: 4,
      title: 'Bảng phân công nhiệm vụ Uỷ viên Ban thường vụ Đoàn Thanh niên 2014 - 2017',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2017'
    }
  ]

  download() {
    window.open('https://doc-0k-0k-docs.googleusercontent.com/docs/securesc/4bi89q6e32qvu2usq4b1sro6d55t2g4r/kk5i673ca6v5g8cljo4guqku7a6556n7/1558454400000/01120937587759455608/01120937587759455608/1nm-ZPsobWcy1pR92WWQocfKWdvrDOSW9?e=download', '_blank');
  }
}
