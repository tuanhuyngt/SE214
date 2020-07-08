import { Group2VatTuServiceProxy, Group2VatTuInsertInput } from "./../../../../../../shared/service-proxies/service-proxies";
import {
   Component,
   OnInit,
   Injector,
   AfterViewInit,
   ViewChild,
} from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";
import { Table } from "primeng/table";
import { Paginator, SelectItem } from "primeng/primeng";
import {
   Group2TaiXeSearchInputDto,
   Group2TaiXeInsertInputDto,
} from "@shared/service-proxies/service-proxies";
import { Group2TaiXeServiceProxy } from "@shared/service-proxies/service-proxies";
import { FormControl } from "@angular/forms";
import { environment } from "environments/environment";
import * as moment from "moment";

@Component({
   selector: "app-material-add-group2",
   templateUrl: "./material-add-group2.component.html",
   styleUrls: ["./material-add-group2.component.css", "../../../style.less"],
})
export class MaterialAddGroup2Component extends AppComponentBase
   implements OnInit, AfterViewInit {
   constructor(
      injector: Injector,
      private Group2TaiXeServiceProxy: Group2TaiXeServiceProxy,
      private _Group2VatTuServiceProxy: Group2VatTuServiceProxy
   ) {
      super(injector);
      this.currentUserName = this.appSession.user.userName;
   }

   driverInsert: Group2TaiXeInsertInputDto = new Group2TaiXeInsertInputDto();
   materialInsert: Group2VatTuInsertInput = new Group2VatTuInsertInput();
   addFormControl = new FormControl();

   saveDialog: boolean;

   currentUserName: string;
   ngAfterViewInit(): void {}

   checkIndexOfOption(array, option) {
      const index = array.findIndex((elm) => elm["value"] === option["value"]);
      if (index === -1) {
         array.push(option);
      }
   }

   resetForm() {
      this.addFormControl.reset();
   }

   insert(): void {
      this.driverInsert.taiXe_NguoiTao = this.currentUserName;
      this.driverInsert.taiXe_TenNguoiDung = this.currentUserName;

      this.Group2TaiXeServiceProxy.tAIXE_Group2Insert(
         this.driverInsert
      ).subscribe((response) => {
         if (response["Result"] == "1") {
            this.notify.error(response["ErrorDesc"], "ERROR", environment.opt);
         } else {
            this.notify.success(
               "Thêm tài xế thành công",
               "SUCCESS",
               environment.opt
            );
            delete this.driverInsert;
            this.resetForm();
         }
      });
   }

   finalConfirm() {
      console.log(this.driverInsert);
      if (this.valueCheck() == true) {
         this.saveDialog = true;
      }
   }

   cancelConfirm() {
      this.driverInsert = new Group2TaiXeInsertInputDto();
   }

   valueCheck(): boolean {
      if (
         this.driverInsert.taiXe_HoTen == null ||
         this.driverInsert.taiXe_HoTen === ""
      ) {
         this.notify.error(
            "Bạn chưa nhập tên tài xế",
            "ERROR",
            environment.opt
         );
         return false;
      }
      if (
         !this.driverInsert.taiXe_MucLuong ||
         this.driverInsert.taiXe_MucLuong <= 0
      ) {
         this.notify.error(
            "Bạn nhập mức lương chưa đúng",
            "ERROR",
            environment.opt
         );
         return false;
      }
      return true;
   }

   ngOnInit() {}
}
