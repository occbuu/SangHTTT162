import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  templateUrl: 'tabs.component.html',
  styleUrls: ['./cards.component.css']
})
export class TabsComponent {
  style: any;
  keyword: any;
  result = new Array();
  resultpagi = new Array();
  data: any[];
  page: number = 1;
  maxRecord: number = 10;
  constructor(public http: HttpClient, private route: ActivatedRoute) {
    if (localStorage.getItem('username') !== 'admin') {
      this.style = { 'display': 'none' }
    }
    this.http.get("./assets/data.json").subscribe(
      data => {
        this.data = data as any[];	 // FILL THE ARRAY WITH DATA.
        this.result = data as any[];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
        this.route.queryParams.subscribe(params => {
          if (params['page'] != null) {
            this.page = params['page'];
          }
          if (this.page > 0) {
            var start = (this.page - 1) * this.maxRecord;
            var end = (this.page * this.maxRecord) + 1;
            this.resultpagi = [];
            if (end > this.result.length) {
              start = 0;
              end = 11;
            }
            for (var i = start; i < end; i++) {
              this.resultpagi.push(this.result[i]);
            }
          }
        });
      },
    );


  }


  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }

  clickSearch() {
    this.result = [];
    this.resultpagi = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.keyword === 'Biển đảo quê hương') {
        if (this.data[i].title.includes('Biển đảo quê hương') || this.data[i].title.includes('Trường sa') ||
          this.data[i].title.includes('Hoàng sa') || this.data[i].title.includes('sông') || this.data[i].title.includes('đất nước')
          || this.data[i].title.includes('Kinh rạch')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'phong trào') {
        if (this.data[i].title.includes('Phong trào') || this.data[i].title.includes('tổ chức') ||
          this.data[i].title.includes('Hoạt động') || this.data[i].title.includes('phong trào')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'nâng cao') {
        if (this.data[i].title.includes('phát huy') || this.data[i].title.includes('bồi dưỡng') ||
          this.data[i].title.includes('phát triển') || this.data[i].title.includes('trang bị') ||
          this.data[i].title.includes('chất lượng') || this.data[i].title.includes('hiệu quả') ||
          this.data[i].title.includes('nâng cao')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'Đoàn thanh niên') {
        if (this.data[i].title.includes('Tổ chức chính trị xã hội') || this.data[i].title.includes('Thành lập Đoàn') ||
          this.data[i].title.includes('thanh niên') || this.data[i].title.includes('Tình nguyện') ||
          this.data[i].title.includes('năng động') || this.data[i].title.includes('sáng tạo') ||
          this.data[i].title.includes('nhiệt huyết') || this.data[i].title.includes('Đoàn thanh niên')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'Cán bộ') {
        if (this.data[i].title.includes('công tác') || this.data[i].title.includes('năng động') ||
          this.data[i].title.includes('công việc') || this.data[i].title.includes('chức danh') ||
          this.data[i].title.includes('năng động') || this.data[i].title.includes('sáng tạo') ||
          this.data[i].title.includes('nhiệt huyết') || this.data[i].title.includes('Cán bộ')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'phát triển') {
        if (this.data[i].title.includes('phát huy') || this.data[i].title.includes('tiến bộ') ||
          this.data[i].title.includes('phát triển')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'chính trị') {
        if (this.data[i].title.includes('Triết học') || this.data[i].title.includes('Mac-Lênin') ||
          this.data[i].title.includes('môn Khoa học') || this.data[i].title.includes('tư tưởng') ||
          this.data[i].title.includes('chính trị') || this.data[i].title.includes('Áng sáng thời đại') ||
          this.data[i].title.includes('tầm nhìn xuyên thế kỷ') || this.data[i].title.includes('đường lối')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'chức danh') {
        if (this.data[i].title.includes('Bí thư') || this.data[i].title.includes('phó bí thư') ||
          this.data[i].title.includes('chủ tịch') || this.data[i].title.includes('phó chủ tịch') ||
          this.data[i].title.includes('cán bộ') || this.data[i].title.includes('đoàn viên') || this.data[i].title.includes('chức danh')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'khu vực') {
        if (this.data[i].title.includes('khu vực') || this.data[i].title.includes('công nhân') ||
          this.data[i].title.includes('lao động') || this.data[i].title.includes('ngoài nhà nước') ||
          this.data[i].title.includes('đất nước') || this.data[i].title.includes('Bắc') ||
          this.data[i].title.includes('Trung') || this.data[i].title.includes('Nam') ||
          this.data[i].title.includes('miền núi') || this.data[i].title.includes('hải đảo') ||
          this.data[i].title.includes('cả nước') || this.data[i].title.includes('thanh niên')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'trường học') {
        if (this.data[i].title.includes('trường học') || this.data[i].title.includes('trung cấp') ||
          this.data[i].title.includes('cao đẳng') || this.data[i].title.includes('đại học') ||
          this.data[i].title.includes('THPT') || this.data[i].title.includes('THCS') ||
          this.data[i].title.includes('tiểu học') || this.data[i].title.includes('3 tích cực') ||
          this.data[i].title.includes('3 rèn luyện') || this.data[i].title.includes('MHX') ||
          this.data[i].title.includes('học bổng') || this.data[i].title.includes('khuyến học')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'thanh thiếu nhi') {
        if (this.data[i].title.includes('thanh thiếu nhi') || this.data[i].title.includes('đội viên') ||
          this.data[i].title.includes('đoàn viên') || this.data[i].title.includes('thanh niên') ||
          this.data[i].title.includes('thiếu nhi') || this.data[i].title.includes('thiếu niên') ||
          this.data[i].title.includes('tuổi trẻ') || this.data[i].title.includes('mầm non') ||
          this.data[i].title.includes('măng non') || this.data[i].title.includes('hoa phượng đỏ') ||
          this.data[i].title.includes('kỳ nghỉ hồng') || this.data[i].title.includes('em yêu tổ quốc em')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'công tác đoàn') {
        if (this.data[i].title.includes('công tác đoàn') || this.data[i].title.includes('tháng thanh niên') ||
          this.data[i].title.includes('kỹ năng') || this.data[i].title.includes('nghiệp vụ')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'đồng bào') {
        if (this.data[i].title.includes('đồng bào') || this.data[i].title.includes('anh em') ||
          this.data[i].title.includes('đồng hương') || this.data[i].title.includes('dân tộc') ||
          this.data[i].title.includes('nhân dân') || this.data[i].title.includes('tập thể') ||
          this.data[i].title.includes('cộng đồng')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'cán bộ') {
        if (this.data[i].title.includes('cán bộ') || this.data[i].title.includes('năng lực') ||
          this.data[i].title.includes('công vụ') || this.data[i].title.includes('công chức') ||
          this.data[i].title.includes('chức danh') || this.data[i].title.includes('dịch vụ công cộng') ||
          this.data[i].title.includes('phẩm chất')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'quán triệt') {
        if (this.data[i].title.includes('quán triệt') || this.data[i].title.includes('tinh thần') ||
          this.data[i].title.includes('triển khai') || this.data[i].title.includes('học tập') ||
          this.data[i].title.includes('đường lối')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'kiểm tra') {
        if (this.data[i].title.includes('kiểm tra') || this.data[i].title.includes('thang điểm') ||
          this.data[i].title.includes('giám sát') || this.data[i].title.includes('thanh tra') ||
          this.data[i].title.includes('rà soát') || this.data[i].title.includes('đánh giá')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'tuyên truyền') {
        if (this.data[i].title.includes('tuyên truyền') || this.data[i].title.includes('triển khai') ||
          this.data[i].title.includes('thực hiện') || this.data[i].title.includes('phổ biến') ||
          this.data[i].title.includes('tuyên dương') || this.data[i].title.includes('thiếu niên')) {
          this.result.push(this.data[i]);
        }
      }
      else if (this.keyword === 'hội nghị') {
        if (this.data[i].title.includes('Đại hội') || this.data[i].title.includes('hội nghị') ||
          this.data[i].title.includes('liên hoan') || this.data[i].title.includes('tuyên truyền') ||
          this.data[i].title.includes('ngày hội') || this.data[i].title.includes('đại biểu')) {
          this.result.push(this.data[i]);
        }
      }
      else {
        if(this.data[i].title.includes(this.keyword)) {
          this.result.push(this.data[i]);
        }
      }

    }
    let max = 0;
    if (this.maxRecord >= this.result.length) {
      max = this.result.length;
    }
    else {
      max = this.maxRecord;
    }
    for (var i = 0; i < max; i++) {
      this.resultpagi.push(this.result[i]);
    }
  }
}
