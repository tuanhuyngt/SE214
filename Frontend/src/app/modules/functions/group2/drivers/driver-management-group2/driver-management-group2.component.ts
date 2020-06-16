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
import {
    Group4LoaiXeDto,
    Group4LoaiXeServiceProxy,
} from "@shared/service-proxies/service-proxies";

@Component({
  selector: 'app-driver-management-group2',
  templateUrl: './driver-management-group2.component.html',
  styleUrls: ['./driver-management-group2.component.css', '../../../style.less']
})
export class DriverManagementGroup2Component extends AppComponentBase implements OnInit, AfterViewInit {

  @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;
    constructor(injector: Injector, private Group4LoaiXeServiceProxy: Group4LoaiXeServiceProxy) {
        super(injector);
        this.currentUserName = this.appSession.user.userName;
    }

    currentUserName: string;
    ngOnInit() {
    }
    ngAfterViewInit(): void {
        this.search();
    }
    // Constants
    CAR_TYPE_NAME: string = "carTypeName";
    CAR_TYPE_MANUFACTURER: string = "carManufacturer";
    CAR_FUEL: string = "carFuel";
    CAR_YEAR: string = "carYear";
    DEFAULT_OPT: object = { name: "Tất cả", value: "-1" };


    //Car Year
    carYearOpts: Array<object> = [{ name: "Tất cả", value: "-1" }];
    carYearSuggestions: Array<object> = [];
    carYearOpt: object = this.DEFAULT_OPT;

    //Car Type Name
    carTypeNameOpts: Array<object> = [{ name: "Tất cả", value: "-1" }];
    carTypeNameSuggestions: Array<object> = [];
    carTypeNameOpt: object = this.DEFAULT_OPT;

    //Car Manufacturer
    carManufacturerOpts: Array<object> = [{ name: "Tất cả", value: "-1" }];
    carManufacturerSuggestions: Array<object> = [];
    carManufacturerOpt: object = this.DEFAULT_OPT;

    //Car Fuel
    carFuelOpts: Array<object> = [
        { name: "Tất cả", value: "-1" },
        { name: "Xăng", value: "X" },
        { name: "Dầu", value: "D" }
    ];
    carFuelSuggestions: Array<object> = [];
    carFuelOpt: object = this.DEFAULT_OPT;

    // Some stuff
    curCarTypeId: number;
    carTypeInput: Group4LoaiXeDto = new Group4LoaiXeDto();
    carTypeRecords: Group4LoaiXeDto[] = [];

    filterCarTypeNameOpt(event) {
        this.carTypeNameSuggestions = this.carTypeNameOpts.filter(opt => {
            return opt["value"].includes(event.query);
        })
    }

    filterCarManufacturerOpt(event) {
        this.carManufacturerSuggestions = this.carManufacturerOpts.filter(opt => {
            return opt["value"].includes(event.query);
        })
    }

    filterCarFuelOpt(event) {
        this.carFuelSuggestions = this.carFuelOpts.filter(opt => {
            return opt["name"].includes(event.query);
        })
    }

    filterCarYearOpt(event) {
        this.carYearSuggestions = this.carYearOpts.filter(opt => {
            return opt["value"].includes(event.query);
        })
    }

    checkIndexOfOption(array, option) {
        const index = array.findIndex(elm => elm["value"] === option["value"]);
        if (index === -1) {
            array.push(option)
        }
    }

    resetOptions() {
        this.carManufacturerOpts = [{ name: "Tất cả", value: "-1" }]
        this.carTypeNameOpts = [{ name: "Tất cả", value: "-1" }]
        this.carYearOpts = [{ name: "Tất cả", value: "-1" }]
    }

    clearOption(type) {
        switch (type) {
            case "carTypeName":
                this.carTypeNameOpt = this.DEFAULT_OPT;
                break;
            case "carManufacturer":
                this.carManufacturerOpt = this.DEFAULT_OPT;
                break;
            case "carFuel":
                this.carFuelOpt = this.DEFAULT_OPT;
                break;
            case "carYear":
                this.carYearOpt = this.DEFAULT_OPT;
                break;
            default:
                break;
        }
    }
    isNumberic: boolean;

    validateInputNumber(event) {
        const pattern = new RegExp("^[0-9]*$")
        if (!pattern.test(event.target.value)) {
            this.isNumberic = false;
        }
        this.isNumberic = true;
    }

    validateFilterInput() {
        this.carTypeInput.loaiXe_Ten = this.carTypeNameOpt["value"];
        this.carTypeInput.loaiXe_Hang = this.carManufacturerOpt["value"];
        this.carTypeInput.loaiXe_LoaiNhienLieu = this.carFuelOpt["value"];
        this.carTypeInput.loaiXe_NamSX = parseInt(this.carYearOpt["value"]);
        if (this.carTypeNameOpt["value"] === "-1") {
            delete this.carTypeInput.loaiXe_Ten;
        }
        if (this.carManufacturerOpt["value"] === "-1") {
            delete this.carTypeInput.loaiXe_Hang;
        }
        if (this.carFuelOpt["value"] === "-1") {
            delete this.carTypeInput.loaiXe_LoaiNhienLieu;
        }
        if (this.carYearOpt["value"] === "-1") {
            delete this.carTypeInput.loaiXe_NamSX;
        }
    }


    delete() {
        let self = this;
        self.message.confirm(
            self.l('Xoá loại xe này', this.curCarTypeId),
            this.l('AreYouSure'),
            isConfirmed => {
                if (isConfirmed) {
                    this.Group4LoaiXeServiceProxy.lOAIXE_Group4Delete(this.curCarTypeId).subscribe((response) => {
                        if (response["Result"] == "-1") {
                            this.notify.error(response["ErrorDesc"]);
                        } else {
                            this.notify.success("Xóa loại xe thành công");
                            this.resetOptions();
                            this.curCarTypeId = null;
                            this.search();
                        }
                    });
                }
            }
        );
    }

    search() {
        // validate input before call api
        this.validateFilterInput();
        // show loading trong gridview
        this.primengTableHelper.showLoadingIndicator();
        this.Group4LoaiXeServiceProxy.lOAIXE_Group4Search(this.carTypeInput)
            .subscribe((result) => {
                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                    let newCarTypeOpt = {
                        name: item.loaiXe_Ten,
                        value: item.loaiXe_Ten.toLowerCase()
                    }
                    let newCarManufactureOpt = {
                        name: item.loaiXe_Hang,
                        value: item.loaiXe_Hang.toLowerCase()
                    }
                    let newCarYear = {
                        name: item.loaiXe_NamSX.toString(),
                        value: item.loaiXe_NamSX.toString()
                    }
                    this.checkIndexOfOption(this.carYearOpts, newCarYear);
                    this.checkIndexOfOption(this.carTypeNameOpts, newCarTypeOpt);
                    this.checkIndexOfOption(this.carManufacturerOpts, newCarManufactureOpt);
                });
                result.length < 1 && this.notify.error("Không tìm thấy dữ liệu");
                this.primengTableHelper.totalRecordsCount = result.length;
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });
    }

}
