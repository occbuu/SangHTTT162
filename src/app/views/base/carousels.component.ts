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
}
