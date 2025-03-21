import { Button } from "primereact/button";

import React, { useState, useRef, useContext, useEffect } from "react";

import "react-image-lightbox/style.css";
import "./tender.css";

import BaseLayout from "layouts/sections/components/BaseLayout";
import { Toolbar } from "primereact/toolbar";
import { Calendar } from "primereact/calendar";
import { useNavigate } from "react-router-dom";
// import { Message } from "primereact/message";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import { AuthContext, AuthProvider } from "context/AuthContext";
import axios from "axios";
import { showToastMessage } from "utilities/ToastMessage";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Column } from "primereact/column";
import moment from "moment";
import { Chip } from "primereact/chip";
// import { Tag } from "primereact/tag";
import { Badge } from "primereact/badge";

export default function Tender() {
  const targetTableClass = "Tenders";
  let emptyProduct = {
    id: null,
    description: null,
    nitRef: null,
    bidStartDate: null,
    bidEndDate: null,
    bidOpeningDate: null,
    tenderFilesActual: [],
    downloadedTimes: 0,
  };
  const uploadRef = useRef(null);
  const dt = useRef(null);

  const { user, authTokens } = useContext(AuthContext);

  const pageTitle = "Tender";
  const breadcrumb = [
    { label: "Home" },
    { label: "More" },
    { label: "Tender" },
  ];
  const navigate = useNavigate();
  const toast = useRef(null);

  const [productDialog, setProductDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);

  const emptyDynamicMetaData = {
    readPermission: null,
    writePermission: null,
    multipleUploads: null,
    uploadPoints: {},
    dataToDisplay: {},
    sortInUse: {},
    filtersInUse: {},
    defaultFiltering: null,
  };

  const [dynamicMetaData, setDynamicMetaData] = useState(emptyDynamicMetaData);

  const getTenders = async () => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (authTokens?.access_token) {
      headers["Authorization"] = `Bearer ${authTokens.access_token}`;
    }
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/getTenders`,
        headers: headers,
        data: {
          targetTableClass: targetTableClass,
        },
      });
      console.log(response.data["data"]["data"]);

      // const transformedData = response.data["data"]["data"];

      const transformedData = response.data["data"]["data"].map((item) => ({
        id: item.id,
        description: item.description,
        nitRef: item.nitRef,
        bidStartDate: new Date(item.bidStartDate),
        bidEndDate: item.bidEndDate,
        bidOpeningDate: item.bidOpeningDate,
        tenderFilesActual: item.tenderFilesActual,
        downloadedTimes: item.downloadedTimes,
      }));

      // console.log(transformedData);
      setProducts(transformedData);
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

  const downloadTender = async (tenderId) => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };

      if (authTokens?.access_token) {
        headers["Authorization"] = `Bearer ${authTokens.access_token}`;
      }
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/getTender`,

        headers: headers,
        data: {
          tenderId: tenderId,
          targetTableClass: targetTableClass,
        },
        responseType: "blob",
      });

      // console.log(response);
      // return;
      // Create a Blob URL for the downloaded file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "TenderFiles.zip"); // Set the file name
      document.body.appendChild(link);
      link.click(); // Simulate click to download
      link.remove(); // Cleanup
    } catch (e) {
      const responseData = e.response?.data;

      const toastDetails = {
        severity: responseData?.type,
        summary: responseData?.summary,
        deatil: responseData?.message,
      };
      showToastMessage(toast, toastDetails);
    }
  };

  const fetchPageMetaData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };

      if (authTokens?.access_token) {
        headers["Authorization"] = `Bearer ${authTokens.access_token}`;
      }
      let response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_READ_API}/fetchStandardPageMetaData`,
        headers: headers,
        data: { targetTableClass: targetTableClass },
      });
      console.log(response.data["data"]);
      // setReadPermission(response.data["data"]["readPermission"]);
      // setWritePermission(response.data["data"]["writePermission"]);
      // setDynamicMetaData({})
      setDynamicMetaData(response.data["data"]["dynamicMetaData"]);
    } catch (e) {
      console.log(e);
      // console.log(e.response.data);
      showToastMessage(toast, {});
    }
  };

  useEffect(() => {
    getTenders();
    fetchPageMetaData();
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  const saveTender = async () => {
    setSubmitted(true);

    /////////////////////  Reading the Files ///////////////////////////////////
    const files = uploadRef.current.getFiles();
    // In case it is an Update Extry Query, surely files.length will be 1 only.
    // if (files.length == 0) {
    //   return;
    // }

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

    // So, this is a new entry call. Because product.id is null.
    // We need to create ID which will come from backend actually.

    // console.log(_product);

    const [success, toastDetails] = await addProductDetails(
      _product,
      _attachedFiles
    );

    if (!success) {
      showToastMessage(toast, toastDetails);
      return;
    }

    showToastMessage(toast, toastDetails);
    // setIsSaveClicked(false);

    // setProducts(_products);
    setProductDialog(false);
    setProduct(emptyProduct);
    // setIsSaveClicked(false);
    window.location.reload();
  };

  const addProductDetails = async (_product, _attachedFiles) => {
    // If it is an update call, _product.id will be not null.
    // Check the same in Backend.
    let headers = {
      "Content-Type": "application/json",
    };

    if (authTokens?.access_token) {
      headers["Authorization"] = `Bearer ${authTokens.access_token}`;
    }
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_WRITE_API_PRIVATE}/addTender`,
        headers: headers,
        data: {
          product: _product,
          files: _attachedFiles,
          targetTableClass: targetTableClass,
        },
      });
      console.log(response.data["data"]["productIDs"]);
      const responseData = response.data;
      return [
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
        false,
        {
          severity: responseData?.type,
          summary: responseData?.summary,
          deatil: responseData?.message,
        },
      ];
    }
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = async () => {
    console.log(product);
    let headers = {
      "Content-Type": "application/json",
    };

    if (authTokens?.access_token) {
      headers["Authorization"] = `Bearer ${authTokens.access_token}`;
    }
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/deleteTender`,
        headers: headers,
        data: {
          targetTableClass: targetTableClass,
          tenderId: product.id,
        },
      });
      window.location.reload();
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

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
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

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const endToolbarTemplate = () => {
    return (
      // dynamicMetaData.writePermission &&

      dynamicMetaData.writePermission && (
        <Button
          severity="success"
          icon="pi pi-plus"
          label="Add Tender"
          onClick={() => {
            setProduct(emptyProduct);
            setSubmitted(false);
            setProductDialog(true);
          }}
        />
      )
    );
  };

  const editProduct = (product) => {
    // console.log(product);
    setProduct({ ...product });
    setProductDialog(true);
  };

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

  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button
        label="Save"
        icon="pi pi-check"
        onClick={() => {
          saveTender();
        }}
      />
    </React.Fragment>
  );

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
        {rowData.tenderFilesActual.map((item) => (
          <React.Fragment>
            <Chip label={item} />
            <br />
          </React.Fragment>
        ))}

        {/* <br /> */}

        <Button
          label="Download Files (.zip)"
          link
          onClick={() => downloadTender(rowData.id)}
        />
        {dynamicMetaData.writePermission && (
          <Badge value={"Seen by: " + rowData.downloadedTimes}></Badge>
        )}
      </React.Fragment>
    );
  };

  const dateBodyTemplate = (rowData) => {
    if (!rowData.bidStartDate) {
      return "Data not available.";
    }
    return moment(rowData.dateBodyTemplate).format("DD/MM/YYYY");
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
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

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className="gallery-container">
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            // start={startToolbarTemplate}
            end={endToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            // selection={selectedProducts}
            // onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            showGridlines
            stripedRows
            paginator
            rows={10}
            removableSort
            tableStyle={{ minWidth: "50rem" }}
            // rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column
              field="description"
              header="Description of Tender"
              // body={fileNameBodyTemplate}
              // sortable={sortInUse["fileName"]}
              style={{ minWidth: "20rem" }}
              // hidden={!dataToDisplay["fileName"]}
            ></Column>
            <Column
              field="nitRef"
              header="NIT Reference"
              // sortable={sortInUse["uploadedBy"]}
              style={{ minWidth: "12rem" }}
              // hidden={!dataToDisplay["uploadedBy"]}
            ></Column>
            <Column
              field="bidStartDate"
              header="Bid submission Start Date"
              body={dateBodyTemplate}
              // sortable={sortInUse["uploadedBy"]}
              style={{ minWidth: "12rem" }}
              // hidden={!dataToDisplay["uploadedBy"]}
            ></Column>
            <Column
              field="bidEndDate"
              header="Bid submission End Date"
              // sortable={sortInUse["uploadedBy"]}
              style={{ minWidth: "12rem" }}
              // hidden={!dataToDisplay["uploadedBy"]}
            ></Column>
            <Column
              field="bidOpeningDate"
              header="Bid opening Date"
              // sortable={sortInUse["uploadedBy"]}
              style={{ minWidth: "12rem" }}
              // hidden={!dataToDisplay["uploadedBy"]}
            ></Column>
            <Column
              header="Download"
              body={downloadBodyTemplate}
              exportable={false}
              style={{ minWidth: "20rem" }}
            ></Column>
            <Column
              header="Action"
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
              hidden={!dynamicMetaData.writePermission}
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
          <div className="field">
            <label htmlFor="description" className="font-bold">
              Description of Tender
            </label>

            <InputTextarea
              value={product.description}
              onChange={(e) => {
                console.log(e);
                onInputChange(e, "description");
              }}
              required
              className={classNames({
                "p-invalid": submitted && !product.description,
              })}
              placeholder="Description of Tender"
            />
            {submitted && !product.description && (
              <small className="p-error">
                Description of Tender is required.
              </small>
            )}
          </div>

          <div className="field">
            <label htmlFor="nitRef" className="font-bold">
              NIT Reference Number
            </label>

            <InputText
              value={product.nitRef}
              onChange={(e) => {
                console.log(e);
                onInputChange(e, "nitRef");
              }}
              required
              className={classNames({
                "p-invalid": submitted && !product.nitRef,
              })}
              placeholder="NIT Reference Number"
            />

            {submitted && !product.nitRef && (
              <small className="p-error">
                NIT Reference Number is required.
              </small>
            )}
          </div>

          <div className="field">
            <label htmlFor="bidStartDate" className="font-bold">
              Bid Start Date (Bids are sorted based on this field)
            </label>
            <Calendar
              id="bidStartDate"
              value={product.bidStartDate}
              onChange={(e) => {
                // e.preventDefault();
                onInputChange(e, "bidStartDate");
              }}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.bidStartDate,
              })}
              placeholder="Select Bid Start Date"
            />
            {submitted && !product.bidStartDate && (
              <small className="p-error">Bid Start Date is required.</small>
            )}
          </div>

          <div className="field">
            <label htmlFor="bidEndDate" className="font-bold">
              Bid End Date
            </label>

            <InputText
              value={product.bidEndDate}
              onChange={(e) => {
                console.log(e);
                onInputChange(e, "bidEndDate");
              }}
              required
              className={classNames({
                "p-invalid": submitted && !product.bidEndDate,
              })}
              placeholder="Bid End Date"
            />

            {submitted && !product.bidEndDate && (
              <small className="p-error">Bid End Date is required.</small>
            )}
          </div>

          <div className="field">
            <label htmlFor="bidOpeningDate" className="font-bold">
              Bid Opening Date
            </label>

            <InputText
              value={product.bidOpeningDate}
              onChange={(e) => {
                console.log(e);
                onInputChange(e, "bidOpeningDate");
              }}
              required
              className={classNames({
                "p-invalid": submitted && !product.bidOpeningDate,
              })}
              placeholder="Bid Opening Date"
            />

            {submitted && !product.bidOpeningDate && (
              <small className="p-error">Bid Opening Date is required.</small>
            )}
          </div>

          <div className="field">
            <label htmlFor="attachedFiles" className="font-bold">
              Attach Files
            </label>
            <FileUpload
              id="attachedFiles"
              name="attachedFiles[]"
              ref={uploadRef}
              // mode="basic"
              // url={"/api/upload"}
              multiple={true}
              accept="application/pdf" // Allow only PDF files
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

            {/* {submitted && <small className="p-error">File is required.</small>} */}
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
                Are you sure you want to delete the Tender:{" "}
                <b>{product.nitRef}</b>?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </BaseLayout>
  );
}
