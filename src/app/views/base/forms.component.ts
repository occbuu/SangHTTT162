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
      title: 'Đề án 05-ĐA/TĐTN-BTN hoạt động của Hội đồng trẻ em thành phố Hồ Chí Minh',
      type: '',
      img: 'word.png',
      download: 290,
      date: '24/05/2018'
    },
    {
      id: 2,
      title: 'Đề án 03-ĐA/TĐTN-BQT Tuyển chọn và tập huấn tình nguyện viên cho Hội nghị chuyên đề IPU khu vực Châu Á – Thái Bình Dương về “Ứng phó với biến đổi khí hậu – Hành động của các Nhà lập pháp',
      type: '',
      img: 'word.png',
      download: 315,
      date: '22/05/2017'
    },
    {
      id: 3,
      title: 'Đề án 02-ĐA/TĐTN-BTNTH tổ chức các hoạt động tình nguyện, tham gia xây dựng Đảo thanh niên tại Đảo Thổ Chu, Huyện Phú Quốc, Tỉnh Kiên Giang giai đoạn 2016 - 2018',
      type: '',
      img: 'word.png',
      download: 330,
      date: '21/05/2016'
    },
    {
      id: 4,
      title: 'Đề án số 07/ĐA-BCH Công tác cán bộ của Đoàn TNCS Hồ Chí Minh TP. Hồ Chí Minh giai đoạn 2009 - 2012 và chuẩn bị đến năm 2015',
      type: '',
      img: 'word.png',
      download: 360,
      date: '15/05/2009'
    }
  ]

  download() {
    window.open('https://doc-0k-0k-docs.googleusercontent.com/docs/securesc/4bi89q6e32qvu2usq4b1sro6d55t2g4r/kk5i673ca6v5g8cljo4guqku7a6556n7/1558454400000/01120937587759455608/01120937587759455608/1nm-ZPsobWcy1pR92WWQocfKWdvrDOSW9?e=download', '_blank');
  }
}
