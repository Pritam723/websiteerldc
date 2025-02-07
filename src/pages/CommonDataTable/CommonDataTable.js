import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// import React, { useContext } from "react";

import BaseLayout from "layouts/sections/components/BaseLayout";
import { AuthContext, AuthProvider } from "context/AuthContext";

import React, { useState, useEffect, useRef, useContext } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";

import { Toolbar } from "primereact/toolbar";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";

import { FloatLabel } from "primereact/floatlabel";

import { showToastMessage } from "utilities/ToastMessage";
import {
  getQuarterList,
  getFinancialYearList,
} from "utilities/DataFilterUtility";

import {
  fileNameBodyTemplate,
  dateBodyTemplate,
  weekBodyTemplate,
  monthBodyTemplate,
  yearBodyTemplate,
  fileDateFromToBodyTemplate,
  uploadDateBodyTemplate,
  fileSizeBodyTemplate,
} from "./CommonDataTableUtility";

export default function CommonDataTable({
  dataToDisplay = {},
  uploadPoints = {},
  sortInUse = {},
  filtersInUse = {},
  defaultFiltering = null,
  pageTitle = "",
  breadcrumb = [],
  targetTableClass = null,
  multipleUploads = false,
}) {
  const { user } = useContext(AuthContext);

  let emptyProduct = {
    id: null,
    fileName: null,
    fileDate: null,
    weekStartsEnds: null,
    month: null,
    quarter: null,
    year: null,
    fy: null,
    fileDateFromTo: null,
    uploadedOn: null,
    uploadedBy: null,
    actualUploadDate: null,
    attachedFiles: null,
    size: 0,
  };

  ///////////////////// These States are used for Filtering & Default Filtering /////////////////
  const [filterOptions] = useState(
    Object.keys(filtersInUse).filter((key) => filtersInUse[key])
  );
  const [filterBy, setFilterBy] = useState(
    filterOptions.length > 0 ? filterOptions[0] : null
  );
  const [filterRange, setFilterRange] = useState(null); // Can be Range or can be a single value. Will cover for Year, Month, Date Range.
  const [filterFY, setFilterFY] = useState(null);
  const [filterQuarter, setFilterQuarter] = useState(null);

  const [fyList, setFyList] = useState([]);
  const [quarterList, setQuarterList] = useState(getQuarterList());
  const [displayRange, setDisplayRange] = useState("");

  //////////////////////////////////////////////////////////////////////////////////////////////

  const [products, setProducts] = useState([]);
  // const [attachedFiles, setAttachedFiles] = useState([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const uploadRef = useRef(null);

  const fetchAllStandardData = async () => {
    try {
      console.log({
        filterOptions: {
          filterBy: filterBy,
          filterRange: filterRange,
          filterFY: filterFY,
          filterQuarter: filterQuarter,
          defaultFiltering: defaultFiltering,
        },
        targetTableClass: targetTableClass,
      });

      // return;

      let response = await axios({
        method: "post",
        url: "http://10.3.101.179:4001/fetchAllStandardData",
        headers: {},
        data: {
          filterOptions: {
            filterBy: filterBy,
            filterRange: filterRange,
            filterFY: filterFY,
            filterQuarter: filterQuarter,
            defaultFiltering: defaultFiltering,
          },
          targetTableClass: targetTableClass,
        },
      });
      console.log(response);
      console.log(response.data["data"]["products"]);
      const responseData = response.data;

      // Convert timestamps to Date objects, keeping null values unchanged
      const convertedProducts = responseData["data"]["products"].map(
        (product) => ({
          ...product,
          fileDate: product.fileDate ? new Date(product.fileDate) : null,
          fileDateFromTo: product.fileDateFromTo
            ? product.fileDateFromTo.map((ts) => (ts ? new Date(ts) : null))
            : null,
          month: product.month ? new Date(product.month) : null,
          year: product.year ? new Date(product.year) : null,
          uploadedOn: product.uploadedOn ? new Date(product.uploadedOn) : null,
          weekStartsEnds: product.weekStartsEnds
            ? product.weekStartsEnds.map((ts) => (ts ? new Date(ts) : null))
            : null,
        })
      );

      // Update state with converted data

      setDisplayRange(responseData["data"]["dataInfo"]);
      setProducts(convertedProducts);
      console.log("Done");
    } catch (e) {
      // console.log(e.response.data);
      const responseData = e.response?.data;
      console.log(responseData);

      const toastDetails = {
        severity: responseData?.type,
        summary: responseData?.summary,
        deatil: responseData?.message,
      };
      showToastMessage(toast, toastDetails);
    }
  };

  useEffect(() => {
    // ProductService.getProducts().then((data) => setProducts(data));
    fetchAllStandardData();
    getFinancialYearList(setFyList, toast);
  }, []);

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);

    /////////////////////  Reading the Files ///////////////////////////////////
    const files = uploadRef.current.getFiles();

    if (files.length == 0) return;

    for (let key in uploadPoints) {
      if (uploadPoints[key] && !product[key]) return;
    }

    // if (!product.weekStartsEnds || !product.uploadedOn || files.length == 0)
    //   return;

    const _attachedFiles = [];

    // Convert file processing into a promise-based operation
    const processFiles = async () => {
      const filePromises = files.map((file) => {
        return new Promise(async (resolve) => {
          const reader = new FileReader();
          const blob = await fetch(file.objectURL).then((r) => r.blob());

          reader.onloadend = () => {
            const base64data = reader.result;

            const fileObject = {
              fileName: file.name,
              lastModified: file.lastModified,
              size: file.size,
              filetype: file.type,
              extension: file.name ? file.name.split(".").pop() : "",
              base64Data: base64data,
            };

            _attachedFiles.push(fileObject);
            resolve(); // Resolve after processing this file
          };

          reader.readAsDataURL(blob);
        });
      });

      await Promise.all(filePromises); // Wait for all files to be processed
    };

    // Wait for all files to be processed before continuing
    await processFiles();

    // console.log(_attachedFiles);
    // console.log(_attachedFiles.length);
    /////////////////////  Done with Reading Files /////////////////////////////

    // if (product.fileName.trim()) {
    // Put code under this check.
    //}

    let _products = [...products];
    let _product = { ...product };

    // console.log(_product);
    // console.log(product);

    if (product.id) {
      // So, this is a update call. Because product.id is not null.
      // Also we are sure that we are working with 1 File only.
      const index = findIndexById(product.id);

      const [newIDs, success, toastDetails] = await addProductDetails(
        _product,
        _attachedFiles
      );

      if (!success) {
        showToastMessage(toast, toastDetails);
        return;
      }

      // So, update is successful.
      _products[index] = _product;
      showToastMessage(toast, toastDetails);
    } else {
      // So, this is a new entry call. Because product.id is null.
      // We need to create ID which will come from backend actually.

      // console.log(_product);

      const [newIDs, success, toastDetails] = await addProductDetails(
        _product,
        _attachedFiles
      );

      if (!success) {
        showToastMessage(toast, toastDetails);
        return;
      }

      // console.log(newIDs);
      newIDs.forEach((newID, index) => {
        const _cloneProduct = { ..._product };
        _cloneProduct.id = newID;
        _cloneProduct.fileName = _attachedFiles[index]["fileName"];
        _cloneProduct.size = _attachedFiles[index]["size"];
        _products.push(_cloneProduct);
      });

      showToastMessage(toast, toastDetails);
    }

    setProducts(_products);
    setProductDialog(false);
    setProduct(emptyProduct);
  };

  const addProductDetails = async (_product, _attachedFiles) => {
    try {
      let response = await axios({
        method: "post",
        url: "http://10.3.101.179:4001/addStandardData",
        headers: {},
        data: {
          product: _product,
          files: _attachedFiles,
          targetTableClass: targetTableClass,
        },
      });
      console.log(response.data["data"]["productIDs"]);
      const responseData = response.data;
      return [
        responseData["data"]["productIDs"],
        true,
        {
          severity: responseData.type,
          summary: responseData.summary,
          deatil: responseData.message,
        },
      ];
    } catch (e) {
      // console.log(e.response.data);
      const responseData = e.response?.data;

      return [
        [],
        false,
        {
          severity: responseData?.type,
          summary: responseData?.summary,
          deatil: responseData?.message,
        },
      ];
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };
  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    // console.log(e.target);
    console.log(e.target.value);

    // console.log(typeof e.target);
    console.log(typeof e.target.value);

    // console.log(e.target.value[0] instanceof Date);

    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const startToolbarTemplate = () => {
    return (
      filterOptions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <FloatLabel>
            <Dropdown
              value={filterBy}
              onChange={(e) => {
                setFilterBy(e.value);
                setFilterRange(null);
                setFilterFY(null);
                setFilterQuarter(null);
              }}
              options={filterOptions}
              // optionLabel="name"
              placeholder="Filter Parameter"
              className="w-full md:w-14rem"
              // checkmark={true}
              highlightOnSelect={false}
            />
            <label>Select a Filter Parameter</label>
          </FloatLabel>
          {filterBy == "Date Range" && (
            <Calendar
              placeholder="Select Date Range"
              value={filterRange}
              onChange={(e) => {
                console.log(e.target.value);
                setFilterRange(e.target.value);
              }}
              selectionMode="range"
              // readOnlyInput
              hideOnRangeSelection
            />
          )}

          {filterBy == "Month" && (
            <Calendar
              placeholder="Select Month"
              value={filterRange}
              onChange={(e) => {
                console.log(e.target.value);
                setFilterRange(e.target.value);
              }}
              view="month"
              dateFormat="mm/yy"
            />
          )}

          {filterBy == "Year" && (
            <Calendar
              placeholder="Select Year"
              value={filterRange}
              onChange={(e) => {
                console.log(e.target.value);
                setFilterRange(e.target.value);
              }}
              view="year"
              dateFormat="yy"
            />
          )}

          {filterBy == "Financial Year & Quarter" && (
            <React.Fragment>
              <Dropdown
                value={filterFY}
                onChange={(e) => setFilterFY(e.value)}
                options={fyList}
                // optionLabel="fy"
                placeholder="Select Financial Year"
              />

              <Dropdown
                value={filterQuarter}
                onChange={(e) => setFilterQuarter(e.value)}
                options={quarterList}
                // optionLabel="fy"
                placeholder="Select Quarter"
              />
            </React.Fragment>
          )}

          <Button
            icon="pi pi-cloud-download"
            label="Fetch Data"
            rounded
            onClick={() => {
              fetchAllStandardData();
            }}
          />
        </div>
      )
    );
  };

  const endToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label={`Upload Data`}
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const downloadBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-download"
          rounded
          outlined
          className="mr-2"
          onClick={() => {
            console.log("Downloaded");
          }}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">
        {displayRange + " Change the Filters for other date range."}
      </h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </IconField>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button
        label="Save"
        icon="pi pi-check"
        onClick={() => {
          saveProduct();
        }}
      />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <React.Fragment>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            start={startToolbarTemplate}
            end={endToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            showGridlines
            paginator
            rows={10}
            removableSort
            // rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            {/* <Column
              field="id"
              header="ID"
              sortable={sortInUse["id"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["id"]}
            ></Column> */}
            <Column
              field="fileName"
              header="File Name"
              body={fileNameBodyTemplate}
              sortable={sortInUse["fileName"]}
              style={{ minWidth: "20rem" }}
              hidden={!dataToDisplay["fileName"]}
            ></Column>
            <Column
              field="fileDate"
              header="Date (dd/mm/yyyy)"
              body={dateBodyTemplate}
              sortable={sortInUse["fileDate"]}
              style={{ minWidth: "10rem" }}
              hidden={!dataToDisplay["fileDate"]}
            ></Column>
            <Column
              field="weekStartsEnds"
              header="Week (Starts-Ends) (dd/mm/yyyy)"
              body={weekBodyTemplate}
              sortable={sortInUse["weekStartsEnds"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["weekStartsEnds"]}
            ></Column>
            <Column
              field="month"
              header="Month"
              body={monthBodyTemplate}
              sortable={sortInUse["month"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["month"]}
            ></Column>
            <Column
              field="quarter"
              header="Quarter"
              //   body={statusBodyTemplate}
              sortable={sortInUse["quarter"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["quarter"]}
            ></Column>
            <Column
              field="year"
              header="Year"
              body={yearBodyTemplate}
              sortable={sortInUse["year"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["year"]}
            ></Column>
            <Column
              field="fy"
              header="Financial Year"
              // body={statusBodyTemplate}
              sortable={sortInUse["fy"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["fy"]}
            ></Column>
            <Column
              field="fileDateFromTo"
              header="File Date (From-To) (dd/mm/yyyy)"
              body={fileDateFromToBodyTemplate}
              sortable={sortInUse["fileDateFromTo"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["fileDateFromTo"]}
            ></Column>
            <Column
              field="uploadedOn"
              header="Upload Date (dd/mm/yyyy)"
              body={uploadDateBodyTemplate}
              sortable={sortInUse["uploadedOn"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["uploadedOn"]}
            ></Column>

            <Column
              field="uploadedBy"
              header="Uploaded By"
              sortable={sortInUse["uploadedBy"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["uploadedBy"]}
            ></Column>

            {/* <Column
              field="actualUploadDate"
              header="Actual Upload Date"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["actualUploadDate"]}
            ></Column> */}
            <Column
              field="size"
              header="File Size"
              body={fileSizeBodyTemplate}
              sortable={sortInUse["size"]}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["size"]}
            ></Column>
            <Column
              header="Download"
              body={downloadBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              header="Action"
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header={product.fileName ? `${product.fileName}` : pageTitle}
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field" hidden={!uploadPoints["fileDate"]}>
            <label htmlFor="fileDate" className="font-bold">
              File Date
            </label>
            <Calendar
              id="fileDate"
              value={product.fileDate}
              onChange={(e) => {
                // e.preventDefault();
                onInputChange(e, "fileDate");
              }}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.fileDate,
              })}
              placeholder="Select Date"
            />
            {submitted && !product.fileDate && (
              <small className="p-error">Date is required.</small>
            )}
          </div>
          <div className="field" hidden={!uploadPoints["weekStartsEnds"]}>
            <label htmlFor="weekStartsEnds" className="font-bold">
              Week (Starts-Ends)
            </label>
            <Calendar
              id="weekStartsEnds"
              value={product.weekStartsEnds}
              onChange={(e) => onInputChange(e, "weekStartsEnds")}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.weekStartsEnds,
              })}
              selectionMode="range"
              readOnlyInput
              hideOnRangeSelection
              placeholder="Select Week"
            />
            {submitted &&
              (!product.weekStartsEnds ||
                !product.weekStartsEnds[0] ||
                !product.weekStartsEnds[1]) && (
                <small className="p-error">
                  Week (Starts-Ends) is required.
                </small>
              )}
          </div>

          <div className="field" hidden={!uploadPoints["month"]}>
            <label htmlFor="month" className="font-bold">
              Month
            </label>

            <Calendar
              id="month"
              value={product.month}
              onChange={(e) => onInputChange(e, "month")}
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.month,
              })}
              view="month"
              dateFormat="mm/yy"
              placeholder="Select Month"
            />

            {submitted && !product.month && (
              <small className="p-error">Month is required.</small>
            )}
          </div>

          <div className="field" hidden={!uploadPoints["quarter"]}>
            <label htmlFor="quarter" className="font-bold">
              Quarter
            </label>
            <Dropdown
              id="quarter"
              value={product.quarter}
              onChange={(e) => onInputChange(e, "quarter")}
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.quarter,
              })}
              options={quarterList}
              // optionLabel="quarter"
              placeholder="Select Quarter"
            />
            {submitted && !product.quarter && (
              <small className="p-error">Quarter is required.</small>
            )}
          </div>

          <div className="field" hidden={!uploadPoints["year"]}>
            <label htmlFor="year" className="font-bold">
              Year
            </label>
            <Calendar
              id="year"
              value={product.year}
              onChange={(e) => {
                console.log(e);
                onInputChange(e, "year");
              }}
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.year,
              })}
              view="year"
              dateFormat="yy"
              placeholder="Select Year"
            />
            {submitted && !product.year && (
              <small className="p-error">Year is required.</small>
            )}
          </div>

          <div className="field" hidden={!uploadPoints["fy"]}>
            <label htmlFor="fy" className="font-bold">
              Financial Year
            </label>

            <Dropdown
              id="fy"
              value={product.fy}
              onChange={(e) => onInputChange(e, "fy")}
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.fy,
              })}
              options={fyList}
              // optionLabel="fy"
              placeholder="Select Financial Year"
            />
            {submitted && !product.fy && (
              <small className="p-error">Financial Year is required.</small>
            )}
          </div>
          <div className="field" hidden={!uploadPoints["fileDateFromTo"]}>
            <label htmlFor="fileDateFromTo" className="font-bold">
              File Date (From-To)
            </label>
            <Calendar
              id="fileDateFromTo"
              value={product.fileDateFromTo}
              onChange={(e) => onInputChange(e, "fileDateFromTo")}
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.fileDateFromTo,
              })}
              selectionMode="range"
              readOnlyInput
              hideOnRangeSelection
              placeholder="Select File Date Range"
            />
            {submitted &&
              (!product.fileDateFromTo ||
                !product.fileDateFromTo[0] ||
                !product.fileDateFromTo[1]) && (
                <small className="p-error">
                  File Date (From-To) is required.
                </small>
              )}
          </div>
          <div className="field" hidden={!uploadPoints["uploadedOn"]}>
            <label htmlFor="uploadedOn" className="font-bold">
              Upload Date
            </label>
            <Calendar
              id="uploadedOn"
              value={product.uploadedOn}
              onChange={(e) => onInputChange(e, "uploadedOn")}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.uploadedOn,
              })}
              placeholder="Select Upload Date"
            />
            {submitted && !product.uploadedOn && (
              <small className="p-error">Upload Date is required.</small>
            )}
          </div>

          <div className="field">
            <label htmlFor="attachedFiles" className="font-bold">
              Attach File
            </label>
            <FileUpload
              id="attachedFiles"
              name="attachedFiles[]"
              ref={uploadRef}
              // mode="basic"
              // url={"/api/upload"}
              multiple={multipleUploads && !product.id}
              accept="*"
              maxFileSize={25 * 1000000} // It is 25Mb
              emptyTemplate={
                <p className="m-0">Drag and drop files to here to upload.</p>
              }
              customUpload={true}
              // uploadHandler={customBase64Uploader}
              uploadHandler={() => {
                console.log("Use the default Save Button!!");
              }}
              // chooseOptions={chooseOptions}
              uploadOptions={{
                className: "hidden ",
              }}
              // cancelOptions={cancelOptions}
            />

            {submitted && <small className="p-error">File is required.</small>}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.fileName}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete the selected products?
              </span>
            )}
          </div>
        </Dialog>
      </React.Fragment>
    </BaseLayout>
  );
}
