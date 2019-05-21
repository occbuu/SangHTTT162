import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  lstDownload : any[] = [
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
  lstUpdate : any[] = [
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
  style : any;
  constructor() {
    if(localStorage.getItem('username') !== 'admin') {
      this.style = {'display': 'none'}
    }
  }
}
