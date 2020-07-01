using Abp.AspNetCore.Mvc.Controllers;
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
    public class Group2VatTuController : AbpController
    {
        private readonly IGroup2VatTuAppService Group2VatTuAppService;

        public Group2VatTuController(IGroup2VatTuAppService Group2VatTuAppService)
        {
            this.Group2VatTuAppService = Group2VatTuAppService;
        }
        [HttpPost]
        public List<Group2VatTuTheoXeSearch> VATTUTHEOXE_Group2Search([FromBody]Group2VatTuTheoXeSearchInput input)
        {
            return Group2VatTuAppService.VATTUTHEOXE_Group2Search(input);
        }
        [HttpPost]
        public List<Group2VatTuTheoXeSearch> VATTUTHEOXE_Group2SearchInUse([FromBody] Group2VatTuTheoXeSearchInput input)
        {
            return Group2VatTuAppService.VATTUTHEOXE_Group2SearchInUse(input);
        }
    }
}
