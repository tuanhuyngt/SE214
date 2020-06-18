using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group2.AbpZeroTemplate.Application.Share.Group2.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group2.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup2TaiXeAppService : IApplicationService
    {
        Group2TaiXeSearchByIdDto TAIXE_Group2SearchById(int Ma);
        List<Group2TaiXeSearchDto> TAIXE_Group2Search(Group2TaiXeSearchInputDto input);

    }
    public class Group2TaiXeAppService : BaseService, IGroup2TaiXeAppService
    {
        public Group2TaiXeAppService()
        {

        }
        public Group2TaiXeSearchByIdDto TAIXE_Group2SearchById(int Ma)
        {
            return procedureHelper.GetData<Group2TaiXeSearchByIdDto>("TAIXE_Group2SearchById", new
            {
                TaiXe_Ma = Ma
            }).FirstOrDefault();
        }

        public List<Group2TaiXeSearchDto> TAIXE_Group2Search(Group2TaiXeSearchInputDto input)
        {
            return procedureHelper.GetData<Group2TaiXeSearchDto>("TAIXE_Group2Search", input);
        }

    }
}
