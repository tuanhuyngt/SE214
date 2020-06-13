﻿using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group8.AbpZeroTemplate.Application.Share.Group8.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group8.AbpZeroTemplate.Web.Core.Cars
{
  public interface IGroup8AppService : IApplicationService
  {
    string test();
  }
  public class Group8AppService : BaseService, IGroup8AppService
  {
    public Group8AppService()
    {

    }
    public string test()
    {
      return "Group8 Config success!";
    }
  }
}
