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
    public interface IGroup2VatTuAppService : IApplicationService
    {
        List<Group2VatTuTheoXeSearch> VATTUTHEOXE_Group2Search(Group2VatTuTheoXeSearchInput input);
        List<Group2VatTuTheoXeSearch> VATTUTHEOXE_Group2SearchInUse(Group2VatTuTheoXeSearchInput input);
    }
    public class Group2VatTuAppService : BaseService, IGroup2VatTuAppService
    {
        public Group2VatTuAppService()
        {

        }
        public List<Group2VatTuTheoXeSearch> VATTUTHEOXE_Group2Search(Group2VatTuTheoXeSearchInput input)
        {
            return procedureHelper.GetData<Group2VatTuTheoXeSearch>("VATTUTHEOXE_Group2Search", input);
        }
        public List<Group2VatTuTheoXeSearch> VATTUTHEOXE_Group2SearchInUse(Group2VatTuTheoXeSearchInput input)
        {
            return procedureHelper.GetData<Group2VatTuTheoXeSearch>("VATTUTHEOXE_Group2SearchInUse", input);
        }
    }
}
