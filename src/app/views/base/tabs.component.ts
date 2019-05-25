import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.component.html',
  styleUrls: ['./cards.component.css']
})
export class TabsComponent {
  style: any;
  constructor() {
    if (localStorage.getItem('username') !== 'admin') {
      this.style = { 'display': 'none' }
    }
  }
  keyword: any;
  data: any[] = [
    {
      id: 1,
      title: 'Hướng dẫn 31-HD/TĐTN-BTG về tổ chức đợt sinh hoạt chính trị tháng 5 và tháng 9 năm 2019',
      type: '',
      img: 'word.png',
      download: 325,
      date: '24/05/2019'
    },
    {
      id: 2,
      title: 'Quyết định 2417-QĐ/TĐTN-VP v/v thành lập 10 Tổ đại biểu tham dự Đại hội đại biểu Đoàn TNCS Hồ Chí Minh thành phố Hồ Chí Minh lần thứ X, nhiệm kỳ 2017 - 2022',
      type: '',
      img: 'word.png',
      download: 346,
      date: '24/05/2019'
    },
    {
      id: 3,
      title: 'Kế hoạch 133-KH/TĐTN-BCNLĐ v/v tăng cường xây dựng và củng cố hoạt động đoàn tại các doanh nghiệp ngoài khu vực nhà nước và đơn vị sự nghiệp ngoài công lập năm 2019',
      type: '',
      img: 'word.png',
      download: 350,
      date: '24/05/2019'
    },
    {
      id: 4,
      title: 'Đề án số 07/ĐA-BCH Công tác cán bộ của Đoàn TNCS Hồ Chí Minh TP. Hồ Chí Minh giai đoạn 2009 - 2012 và chuẩn bị đến năm 2015',
      type: '',
      img: 'word.png',
      download: 349,
      date: '24/05/2019'
    },
    {
      id: 5,
      title: 'Báo cáo 127-BC/TĐTN-VP về công tác Đoàn và phong trào thanh thiếu nhi Thành phố tháng 4 năm 2019',
      type: '',
      img: 'word.png',
      download: 334,
      date: '24/05/2019'
    }
  ]

  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }

  clickSearch() {
    if (this.keyword === 'MHX') {
      this.data = [
        {
          id: 1,
          title: 'Kế hoạch tổ chức gặp gỡ các già làng, trưởng buôn, trưởng thôn, ấp, gia đình nuôi chiến sĩ tình nguyện trong chiến dịch MHX 20069',
          type: '',
          img: 'word.png',
          download: 325,
          date: '24/05/2019'
        },
        {
          id: 2,
          title: 'Thông báo về việc thực hiện các danh hiệu khen thưởng trong Mùa hè xanh 2006.',
          type: '',
          img: 'word.png',
          download: 346,
          date: '20/04/2019'
        },
        {
          id: 3,
          title: 'Kế hoạch tổ chức lễ hội quân MHX lần thứ 13 năm 2006 và tham gia tổng kết chiến dịch TN HSSV tình nguyện Hè toàn quốc năm 2006.',
          type: '',
          img: 'word.png',
          download: 350,
          date: '24/04/2019'
        },
        {
          id: 4,
          title: 'Thông báo số 349 /TB-ĐTN điều chỉnh địa điểm ra quân ngày Chủ nhật xanh lần thứ 87 (25/7/2010) và thực hiện công trình "Cải thiện môi trường các tuyến kênh góp phần giảm ngập trên địa bàn TP" trong CDTN MHX lần thứ 17 năm 2010 tại phường Thảo Điền, quận 2',
          type: '',
          img: 'word.png',
          download: 349,
          date: '12/05/2019'
        }
      ];
    }
    else if (this.keyword === 'Đoàn thanh niên') {
      this.data = [
        {
          id: 1,
          title: 'Đề án 12-ĐA/TĐTN-BMT.ANQP.ĐBDC Đoàn Thanh niên cộng sản Hồ Chí Minh thành phố tham gia xây dựng nông thôn mới, giai đoạn 2018 - 2022',
          type: '',
          img: 'word.png',
          download: 325,
          date: '02/05/2019'
        },
        {
          id: 2,
          title: 'Quyết định khen thưởng 185-QĐKT/TĐTN-VP tặng Bằng khen đối với 07 tập thể Đoàn Thanh niên Công an thành phố đã có thành tích xuất sắc trong thực hiện Tháng Thanh niên năm 2018.',
          type: '',
          img: 'word.png',
          download: 346,
          date: '20/05/2019'
        },
        {
          id: 3,
          title: 'Quyết định khen thưởng 184-QĐKT/TĐTN-VP tặng Bằng khen đối với 07 tập thể Đoàn Thanh niên Bộ tư lệnh Thành phố đã có thành tích xuất sắc trong thực hiện Tháng Thanh niên năm 2018',
          type: '',
          img: 'word.png',
          download: 350,
          date: '05/05/2019'
        },
        {
          id: 4,
          title: 'Thông báo 2901-TB/TĐTN-BTC V/v tổ chức và mời tham dự Lễ khánh thành giai đoạn 1 Khu lưu niệm Vùng căn cứ kháng chiến Miền Đông Nam Bộ Đoàn Thanh niên nhân dân Cách mạng Việt Nam',
          type: '',
          img: 'word.png',
          download: 349,
          date: '14/05/2019'
        }
      ];
    }
    else {
      this.data = [
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
      ];
    }
  }
}
