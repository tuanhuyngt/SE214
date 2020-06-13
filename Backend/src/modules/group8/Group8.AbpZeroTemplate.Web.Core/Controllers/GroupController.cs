using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group8.AbpZeroTemplate.Application.Share.Group8.Dto;
using Group8.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group8.AbpZeroTemplate.Application.Controllers
{
  [Route("api/[controller]/[action]")]
  public class Group8Controller : AbpController
  {
    private readonly IGroup8AppService Group8AppService;

    public Group8Controller(IGroup8AppService Group8AppService)
    {
      this.Group8AppService = Group8AppService;
    }

    [HttpGet]
    public string test()
    {
      return Group8AppService.test();
    }
  }
}
