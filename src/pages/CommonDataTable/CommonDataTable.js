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
import { ProductService } from "./ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import breadcrumbs from "assets/theme/components/breadcrumbs";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import moment from "moment";

export default function PeakHours({
  dataToDisplay = {},
  uploadPoints = {},
  pageTitle = "",
  breadcrumb = [],
  apiEndPoints = {},
}) {
  const { user } = useContext(AuthContext);

  let emptyProduct = {
    id: null,
    filename: "",
    fileDate: null,
    weekStartsEnds: null,
    month: null,
    quarter: null,
    year: null,
    fy: null,
    fileDateFromTo: null,
    uploadedOn: null,
    actualUploadDate: null,
    size: 0,
  };

  const [products, setProducts] = useState([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const dateBodyTemplate = (rowData) => {
    // return rowData.fileDate.toString();
    if (!rowData.fileDate) {
      return "Data not available.";
    }
    return moment(rowData.fileDate).format("DD/MM/YYYY");
  };

  const weekBodyTemplate = (rowData) => {
    // return rowData.fileDate.toString();
    if (
      !rowData.weekStartsEnds ||
      !rowData.weekStartsEnds[0] ||
      !rowData.weekStartsEnds[1]
    ) {
      return "Data not available.";
    }
    return `${moment(rowData.weekStartsEnds[0]).format(
      "DD/MM/YYYY"
    )} to ${moment(rowData.weekStartsEnds[1]).format("DD/MM/YYYY")}`;
  };

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

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _product.image = "product-placeholder.svg";
        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
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

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  //   const exportCSV = () => {
  //     dt.current.exportCSV();
  //   };

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

  const onCategoryChange = (e) => {
    let _product = { ...product };

    _product["category"] = e.value;
    setProduct(_product);
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

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
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

  //   const rightToolbarTemplate = () => {
  //     return (
  //       <Button
  //         label="Export"
  //         icon="pi pi-upload"
  //         className="p-button-help"
  //         onClick={exportCSV}
  //       />
  //     );
  //   };

  //   const priceBodyTemplate = (rowData) => {
  //     return formatCurrency(rowData.price);
  //   };

  //   const ratingBodyTemplate = (rowData) => {
  //     return <Rating value={rowData.rating} readOnly cancel={false} />;
  //   };

  //   const statusBodyTemplate = (rowData) => {
  //     return (
  //       <Tag
  //         value={rowData.inventoryStatus}
  //         severity={getSeverity(rowData)}
  //       ></Tag>
  //     );
  //   };

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

  //   const getSeverity = (product) => {
  //     switch (product.inventoryStatus) {
  //       case "INSTOCK":
  //         return "success";

  //       case "LOWSTOCK":
  //         return "warning";

  //       case "OUTOFSTOCK":
  //         return "danger";

  //       default:
  //         return null;
  //     }
  //   };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">{pageTitle}</h4>
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
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
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
      {/* <div className="flex justify-content-center">
        <div className="card"> */}

      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            // right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            // rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="id"
              header="ID"
              sortable
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["id"]}
            ></Column>
            <Column
              field="filename"
              header="File Name"
              sortable={false}
              style={{ minWidth: "16rem" }}
              hidden={!dataToDisplay["filename"]}
            ></Column>
            <Column
              field="fileDate"
              header="Date (dd/mm/yyyy)"
              body={dateBodyTemplate}
              sortable={false}
              style={{ minWidth: "10rem" }}
              hidden={!dataToDisplay["fileDate"]}
            ></Column>
            <Column
              field="weekStartsEnds"
              header="Week (Starts-Ends)"
              body={weekBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["weekStartsEnds"]}
            ></Column>
            {/*<Column
              field="month"
              header="Month"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["month"]}
            ></Column>
            <Column
              field="quarter"
              header="Quarter"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["quarter"]}
            ></Column>
            <Column
              field="year"
              header="Year"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["year"]}
            ></Column>
            <Column
              field="fy"
              header="Financial Year"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["fy"]}
            ></Column>
            <Column
              field="fileDateFromTo"
              header="File Date (From-To)"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["fileDateFromTo"]}
            ></Column>
            <Column
              field="uploadedOn"
              header="Upload Date"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["uploadedOn"]}
            ></Column>
            <Column
              field="actualUploadDate"
              header="Actual Upload Date"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["actualUploadDate"]}
            ></Column>
            <Column
              field="size"
              header="File Size (In Kb)"
              //   body={statusBodyTemplate}
              sortable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dataToDisplay["size"]}
            ></Column> */}
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
          header={pageTitle}
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field" hidden={!uploadPoints["filename"]}>
            <label htmlFor="filename" className="font-bold">
              File Name
            </label>
            <InputText
              id="filename"
              value={product.filename}
              onChange={(e) => onInputChange(e, "filename")}
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.filename,
              })}
            />
            {submitted && !product.filename && (
              <small className="p-error">File Name is required.</small>
            )}
          </div>
          <div className="field" hidden={!uploadPoints["fileDate"]}>
            <label htmlFor="fileDate" className="font-bold">
              File Date
            </label>
            <Calendar
              id="fileDate"
              value={product.fileDate}
              onChange={(e) => {
                e.preventDefault();
                onInputChange(e, "fileDate");
              }}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.fileDate,
              })}
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
            />
            {submitted && !product.weekStartsEnds && (
              <small className="p-error">Week (Starts-Ends) is required.</small>
            )}
          </div>

          {/* <div className="field" hidden={!uploadPoints["month"]}>
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
              options={[
                { quarter: "Q1" },
                { quarter: "Q2" },
                { quarter: "Q3" },
                { quarter: "Q4" },
              ]}
              optionLabel="quarter"
              // placeholder="Select a City"
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
              options={[
                { fy: "2020-21" },
                { fy: "2021-22" },
                { fy: "2022-23" },
                { fy: "2023-24" },
                { fy: "2024-25" },
                { fy: "2025-26" },
              ]}
              optionLabel="fy"
              // placeholder="Select a City"
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
            />
            {submitted && !product.fileDateFromTo && (
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
              onChange={(e) => {
                e.preventDefault();
                onInputChange(e, "uploadedOn");
              }}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.uploadedOn,
              })}
            />
            {submitted && !product.uploadedOn && (
              <small className="p-error">Upload Date is required.</small>
            )}
          </div> */}
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
                Are you sure you want to delete <b>{product.filename}</b>?
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
      </div>
      {/* </div>
      </div> */}
    </BaseLayout>
  );
}
