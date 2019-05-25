import { Component } from '@angular/core';

@Component({
  templateUrl: 'collapses.component.html',
  styleUrls: ['./cards.component.css']
})
export class CollapsesComponent {
  data : any[] = [
    {
      id: 1,
      title: 'Chỉ thị 03-CT/TĐTN-BMT.ANQP.ĐBDC v/v tăng cường vai trò nòng cốt chính trị của Đoàn TNCS Hồ Chí Minh TP.Hồ Chí Minh trong Hội Liên hiệp Thanh niên Việt Nam, Hội Sinh viên Việt Nam TP. Hồ Chí Minh',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2015'
    },
    {
      id: 2,
      title: 'Chỉ thị 02-CT/TĐTN V/v đẩy mạnh việc thực hiện Cuộc vận động xây dựng phong cách cán bộ Đoàn TNCS Hồ Chí Minh thành phố Hồ Chí Minh trong năm 2014 gắn với việc “Học tập và làm theo tấm gương đạo đức Hồ Chí Minh về nêu cao tinh thần trách nhiệm, chống chủ nghĩa cá nhân, nói đi đôi với làm”',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/04/2014'
    },
    {
      id: 3,
      title: 'Chỉ thị số 01/CT-ĐTN v/v đẩy mạnh công tác bồi dưỡng, giới thiệu đoàn viên ưu tú sang Đảng xem xét kết nạp nhân kỷ niệm 80 năm Ngày thành lập Đảng Cộng sản Việt Nam (3/2/1930 – 3/2/2010) và 80 năm ngày thành lập Đoàn TNCS Hồ Chí Minh (26/3/1931 – 26/3/2011)',
      type: '',
      img: 'word.png',
      download: 360,
      date: '24/08/2010'
    },
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
