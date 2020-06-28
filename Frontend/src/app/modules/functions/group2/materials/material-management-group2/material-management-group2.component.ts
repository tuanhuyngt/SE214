import { environment } from 'environments/environment';
import { Group2TaiXeSearchInputDto } from '@shared/service-proxies/service-proxies';
import { Group2TaiXeServiceProxy } from '@shared/service-proxies/service-proxies';

import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit,
    Injector
} from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Table } from "primeng/components/table/table";
import { Paginator } from "primeng/primeng";

@Component({
  selector: 'app-material-management-group2',
  templateUrl: './material-management-group2.component.html',
  styleUrls: ['./material-management-group2.component.css', '../../../style.less']
})
export class MaterialManagementGroup2Component extends AppComponentBase implements OnInit, AfterViewInit {

  @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;
    constructor(injector: Injector, private Group2TaiXeServiceProxy: Group2TaiXeServiceProxy) {
        super(injector);
        this.currentUserName = this.appSession.user.userName;
    }

    currentUserName: string;
    ngOnInit() {
    }
    ngAfterViewInit(): void {
        this.search();
    }

    driverId: number;
    driverName: string = '';
    driverInput: Group2TaiXeSearchInputDto = new Group2TaiXeSearchInputDto();

    checkIndexOfOption(array, option) {
        const index = array.findIndex(elm => elm["value"] === option["value"]);
        if (index === -1) {
            array.push(option)
        }
    }

    onChangeSearch()
    {
        this.driverInput.taiXe_HoTen = this.driverName;
        this.onSearch();
    }

    resetOptions() {
    }

    clearOption(type) {
    }


    delete() {
        let self = this;
        self.message.confirm(
            self.l('Xác nhận xóa tài xế', this.driverId),
            this.l(''),
            isConfirmed => {
                if (isConfirmed) {
                    this.Group2TaiXeServiceProxy.tAIXE_Group2Del(this.driverId).subscribe((response) => {
                        if (response["Result"] === "1") {
                            this.notify.error("Xóa tài xế thất bại", "ERROR", environment.opt);
                        } else {
                            this.notify.success("Xóa tài xế thành công", "SUCCESS", environment.opt);
                            this.resetOptions();
                            this.driverId = null;
                            this.search();
                        }
                    });
                }
            }
        );
    }
   
    search() {
        this.driverInput.taiXe_TrangThaiLamViec = 'D';
        this.primengTableHelper.showLoadingIndicator();
        this.Group2TaiXeServiceProxy.tAIXE_Group2Search(this.driverInput)
            .subscribe((result) => {
                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                });
                result.length < 1 && this.notify.error("Không tìm thấy dữ liệu");
                this.primengTableHelper.totalRecordsCount = result.length;
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });
    }
    onSearch() {
        this.driverInput.taiXe_TrangThaiLamViec = 'D';
        this.primengTableHelper.showLoadingIndicator();
        this.Group2TaiXeServiceProxy.tAIXE_Group2Search(this.driverInput)
            .subscribe((result) => {
                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                });
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });
    }

}