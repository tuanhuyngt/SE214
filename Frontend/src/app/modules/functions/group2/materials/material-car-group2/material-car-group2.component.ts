import { PrimengTableHelper } from './../../../../../../shared/helpers/PrimengTableHelper';
import { Group4LoaiXeServiceProxy, Group4LoaiXeDto, Group5XeDto } from './../../../../../../shared/service-proxies/service-proxies';
import { Group5XeServiceProxy } from "@shared/service-proxies/service-proxies";
import { Group2TaiXeServiceProxy } from "@shared/service-proxies/service-proxies"
import {
   Component,
   OnInit,
   Injector,
   AfterViewInit,
   ViewChild,
} from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";
import { Table } from "primeng/components/table/table";
import { Paginator } from "primeng/primeng";
import { result } from 'lodash';

@Component({
   selector: "app-material-car-group2",
   templateUrl: "./material-car-group2.component.html",
   styleUrls: ["./material-car-group2.component.css", "../../../style.less"],
})
export class MaterialCarGroup2Component extends AppComponentBase
   implements OnInit, AfterViewInit {
   @ViewChild("dataTable1") dataTable1: Table;
   @ViewChild("dataTable2") dataTable2: Table;
   @ViewChild("paginator") paginator: Paginator;
   constructor(
      injector: Injector,
      private _Group5XeServiceProxy: Group5XeServiceProxy,
      private _Group4LoaiXeServiceProxy : Group4LoaiXeServiceProxy,
      private _Group2TaiXeServiceProxy : Group2TaiXeServiceProxy
   ) {
      super(injector);
   }

   ngOnInit() {
      this.carWithoutMaterialSearch();
      this.carWithMaterialSearch();
      this.modelCarSearch();
   }

   ngAfterViewInit() {}

   // Init Data Model Car
   modelCarSearchDto = new Group4LoaiXeDto();
   modelCarList : Group4LoaiXeDto[];
   filteredModelCar : any[];
   modelCar : any[];

   filterModelCar(event) {
      this.filteredModelCar = [];
      for (let i = 0; i<this.modelCarList.length; i++) {
         let model = this.modelCarList[i];
         if (model.loaiXe_Ten.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredModelCar.push(model);
         }
      }
   }

   carWithoutMaterial = new PrimengTableHelper();
   carWithMaterial = new PrimengTableHelper();

   //


   modelCarSearch() {
      this._Group4LoaiXeServiceProxy.lOAIXE_Group4Search(this.modelCarSearchDto)
      .subscribe((result) => {
         if (result["Result"] === "-1")
         this.notify.error(result["ErrorDesc"])
         else {
            this.modelCarList = result;
         }
      });
   }

   carWithoutMaterialSearch() {
      console.log(this.modelCar);
      this.primengTableHelper.showLoadingIndicator();
      this._Group5XeServiceProxy
         .xe_Group5DisplayVehicles()
         .subscribe((result) => {
            let no = 1;
            result.forEach((item) => {
               item["no"] = no++;
            });
            result.length < 1 && this.notify.error("Không tìm thấy dữ liệu");
            this.carWithoutMaterial.totalRecordsCount = result.length;
            this.carWithoutMaterial.records = result;
            this.carWithMaterial.hideLoadingIndicator();
         });
   }

   carWithMaterialSearch() {
      console.log(this.modelCar);
      this.carWithMaterial.showLoadingIndicator();
      this._Group5XeServiceProxy
         .xe_Group5DisplayVehicles()
         .subscribe((result) => {
            let no = 1;
            result.forEach((item) => {
               item["no"] = no++;
            });
            result.length < 1 && this.notify.error("Không tìm thấy dữ liệu");
            this.carWithMaterial.totalRecordsCount = result.length;
            this.carWithMaterial.records = result;
            this.carWithMaterial.hideLoadingIndicator();
         });
   }

}
