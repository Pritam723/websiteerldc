import { Button } from "primereact/button";

import React, { useState, useRef, useContext, useEffect } from "react";

import "react-image-lightbox/style.css";
import "./LatestNews.css";
import PleaseSignIn from "pages/TemplatePage/PleaseSignIn.js";
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
import { Dropdown } from 'primereact/dropdown';


export default function HRDocuments() {
  const targetTableClass = "HRDocuments";
  let emptyProduct = {
    id: null,
    typeOfDocument: null,
    uploadedOn: null
  };
  const uploadRef = useRef(null);
  const dt = useRef(null);

  const { user, authTokens } = useContext(AuthContext);

  const pageTitle = "Other Documents";
  const breadcrumb = [
    { label: "More" },
    { label: "Upload Documents" },
    { label: "Other Documents" },
  ];
  const navigate = useNavigate();
  const toast = useRef(null);

  const [productDialog, setProductDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedTypeOfDocument, setSelectedTypeOfDocument] = useState(null);



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

  const getHRDocuments = async () => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (authTokens?.access_token) {
      headers["Authorization"] = `Bearer ${authTokens.access_token}`;
    }
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/fetchHRDocuments`,
        headers: headers,
        data: {
          targetTableClass: targetTableClass,
        },
      });
      // console.log(response.data["data"]["data"]);

      // const transformedData = response.data["data"]["data"];

    //   const transformedData = response.data["data"]["data"]

      console.log(response.data["data"]["data"])

      const transformedData = response.data["data"]["data"].map((item) => ({
        id: item.id,
        typeOfDocument: item.typeOfDocument,
        uploadedOn: new Date(item.uploadedOn),
      }));

      console.log(transformedData);
      setProducts(transformedData);
    } catch (e) {
      // // console.log(e.response.data);
      const responseData = e.response?.data;
      // console.log(responseData);
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
      // console.log(response.data["data"]);
      // setReadPermission(response.data["data"]["readPermission"]);
      // setWritePermission(response.data["data"]["writePermission"]);
      // setDynamicMetaData({})
      setDynamicMetaData(response.data["data"]["dynamicMetaData"]);
    } catch (e) {
      // console.log(e);
      // // console.log(e.response.data);
      showToastMessage(toast, {});
    }
  };

  useEffect(() => {
    getHRDocuments();
    fetchPageMetaData();
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const saveHRDocument = async () => {
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

    // // console.log(_attachedFiles);
    // // console.log(_attachedFiles.length);
    /////////////////////  Done with Reading Files /////////////////////////////

    // if (product.fileName.trim()) {
    // Put code under this check.
    //}

    let _products = [...products];
    let _product = { ...product };

    // // console.log(_product);
    // // console.log(product);

    // So, this is a new entry call. Because product.id is null.
    // We need to create ID which will come from backend actually.

    // // console.log(_product);

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
        url: `${process.env.REACT_APP_WRITE_API_PRIVATE}/addHRDocument`,
        headers: headers,
        data: {
          product: _product,
          files: _attachedFiles,
          targetTableClass: targetTableClass,
        },
      });
      // console.log(response.data["data"]["productIDs"]);
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
      // // console.log(e.response.data);
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



  const onInputChange = (e, name) => {
    // // console.log(e.target);
    // console.log(e.target.value);

    // // console.log(typeof e.target);
    // console.log(typeof e.target.value);

    // // console.log(e.target.value[0] instanceof Date);

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
          label="Add Document"
          onClick={() => {
            setProduct(emptyProduct);
            setSubmitted(false);
            setProductDialog(true);
          }}
        />
      )
    );
  };




  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button
        label="Save"
        icon="pi pi-check"
        onClick={() => {
          saveHRDocument();
        }}
      />
    </React.Fragment>
  );

 

  const dateBodyTemplate = (rowData) => {
    if (!rowData.uploadedOn) {
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

  const redirectionURL = "/more/downloadpowermaps";

  // const { authTokens } = useContext(AuthContext);


  if (!authTokens) {
    return <PleaseSignIn readPermission={false} breadcrumb={breadcrumb} redirectionURL={redirectionURL} />;
  }

  console.log(authTokens)

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
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Items"
            globalFilter={globalFilter}
            header={header}
          >
            <Column
              field="typeOfDocument"
              header="Type of Document"
              // body={fileNameBodyTemplate}
              // sortable={sortInUse["fileName"]}
              style={{ minWidth: "20rem" }}
              // hidden={!dataToDisplay["fileName"]}
            ></Column>
      
            <Column
              field="uploadedOn"
              header="Upload Date"
              body={dateBodyTemplate}
              // sortable={sortInUse["uploadedBy"]}
              style={{ minWidth: "12rem" }}
              // hidden={!dataToDisplay["uploadedBy"]}
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
            <label htmlFor="typeOfDocument" className="font-bold">
              Type of Document
            </label>
            <Dropdown 
                value={selectedTypeOfDocument} 
                onChange={(e) => {
                    console.log(e.value);
                    setSelectedTypeOfDocument(e.value)
                    onInputChange(e, "typeOfDocument")
                }} 
                options={["OgranizationalChart", "ISO_27001","ISO_45001","ISO_14001","ISO_9001","IMS_Policy","EmpList","EmployeeDirectory","ERLDC_Empanelled_Hospitals","WB_Power_Map","Sikkim_Power_Map","Jharkhand_Power_Map",
                  "Odisha_Power_Map","Bihar_Power_Map","DVC_Power_Map","ER_Power_Map","ERLDC_Outage_Procedure","PublicInformationOfficers","InformationAvailableInElectronicForm",""]} 
                // optionLabel="name"
                required

                className={classNames({
                  "p-invalid": submitted && !product.typeOfDocument,
                })}
                placeholder="Type of Document"
            />

            {submitted && !product.typeOfDocument && (
              <small className="p-error">
                Type of Document is required.
              </small>
            )}
          </div>

          <div className="field">
            <label htmlFor="uploadedOn" className="font-bold">
              Uploaded On
            </label>
            <Calendar
              id="uploadedOn"
              value={product.uploadedOn}
              onChange={(e) => {
                // e.preventDefault();
                onInputChange(e, "uploadedOn");
              }}
              dateFormat="dd/mm/yy"
              required
              // autoFocus
              className={classNames({
                "p-invalid": submitted && !product.uploadedOn,
              })}
              placeholder="Select Date"
            />
            {submitted && !product.uploadedOn && (
              <small className="p-error">Uploaded On is required.</small>
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
              multiple={false}
              accept="*" // Allow only PDF files
              maxFileSize={25 * 1000000} // It is 25Mb
              emptyTemplate={
                <p className="m-0">Drag and drop files to here to upload.</p>
              }
              customUpload={true}
              // uploadHandler={customBase64Uploader}
              uploadHandler={() => {
                // console.log("Use the default Save Button!!");
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

      </div>
    </BaseLayout>
  );
}
