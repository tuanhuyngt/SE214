﻿using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group2.AbpZeroTemplate.Application.Share.Group2.Dto;
using Group2.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Group2.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group2TaiXeController : AbpController
    {
        private readonly IGroup2TaiXeAppService Group2TaiXeAppService;

        public Group2TaiXeController(IGroup2TaiXeAppService Group2TaiXeAppService)
        {
            this.Group2TaiXeAppService = Group2TaiXeAppService;
        }
        [HttpPost]
        public Group2TaiXeSearchByIdDto TAIXE_Group2SearchById(int Ma)
        {
            return Group2TaiXeAppService.TAIXE_Group2SearchById(Ma);
        }
        [HttpPost]
        public List<Group2TaiXeSearchDto> TAIXE_Group2Search([FromBody]Group2TaiXeSearchInputDto input)
        {
            return Group2TaiXeAppService.TAIXE_Group2Search(input);
        }
    }
}
