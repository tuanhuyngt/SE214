﻿
using System;

namespace Group9.AbpZeroTemplate.Application.Share.Group9.Dto
{
  public class Group9LoaiXeDto
  {
        public int? Ma { get; set; }
        public string LoaiXe_Ten { get; set; }
        public string LoaiXe_Hang { get; set; }
        public float? LoaiXe_DinhMucNhienLieu { get; set; }
        public int? LoaiXe_NamSX { get; set; }
        public int? LoaiXe_SoLuong { get; set; }
        public char? LoaiXe_TrangThai { get; set; }
        public DateTime? LoaiXe_NgayTao { get; set; }
        public string LoaiXe_NguoiTao { get; set; }
        public char? LoaiXe_LoaiNhienLieu { get; set; }
    }
}
