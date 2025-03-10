import { Button } from "primereact/button";

import React, { useState, useRef, useContext, useEffect } from "react";

import "react-image-lightbox/style.css";
import "./gallery.css";

import BaseLayout from "layouts/sections/components/BaseLayout";
import { Toolbar } from "primereact/toolbar";
import { Calendar } from "primereact/calendar";
import { useNavigate } from "react-router-dom";
import { Message } from "primereact/message";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { AuthContext, AuthProvider } from "context/AuthContext";
import axios from "axios";
import { showToastMessage } from "utilities/ToastMessage";
import { Toast } from "primereact/toast";

export default function MultiGallery() {
  const targetTableClass = "Albums";
  let emptyProduct = {
    id: null,
    title: null,
    cover: null,
    noImages: 0,
    year: null,
  };
  const uploadRef = useRef(null);
  const { user, authTokens } = useContext(AuthContext);

  const pageTitle = "Photo Gallery";
  const breadcrumb = [{ label: "Home" }, { label: "Photo Gallery" }];
  const [filterRange, setFilterRange] = useState(new Date()); // Can be Range or can be a single value. Will cover for Year, Month, Date Range.
  const navigate = useNavigate();
  const toast = useRef(null);

  const [productDialog, setProductDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useState([]);

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

  const getAlbums = async () => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (authTokens?.access_token) {
      headers["Authorization"] = `Bearer ${authTokens.access_token}`;
    }
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/getAlbums`,
        headers: headers,
        data: {
          targetTableClass: targetTableClass,
          year: filterRange.getFullYear(),
        },
      });
      console.log(response.data["data"]["data"]);

      const transformedData = response.data["data"]["data"].map((item) => ({
        id: item.id,
        title: item.title,
        cover: `${process.env.REACT_APP_READ_API}/images/${item.cover}`, // Use the environment variable
        noImages: item.noImages,
        year: new Date(), // Assign the current date
      }));

      console.log(transformedData);
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
    getAlbums();
    fetchPageMetaData();
  }, [filterRange]);

  const [submitted, setSubmitted] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  const saveAlbum = async () => {
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
        url: `${process.env.REACT_APP_WRITE_API_PRIVATE}/addAlbum`,
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
        url: `${process.env.REACT_APP_READ_API}/deleteAlbum`,
        headers: headers,
        data: {
          targetTableClass: targetTableClass,
          albumId: product.id,
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

  const startToolbarTemplate = () => {
    return (
      <div className="flex-auto">
        <label className="font-bold block mb-2">Select Year to Filter</label>
        <Calendar
          placeholder="Select Year"
          value={filterRange}
          onChange={(e) => {
            console.log(e.target.value);
            setFilterRange(e.target.value);
          }}
          view="year"
          dateFormat="yy"
        />{" "}
      </div>
    );
  };

  const endToolbarTemplate = () => {
    return (
      dynamicMetaData.writePermission && (
        <Button
          severity="success"
          icon="pi pi-plus"
          label="Add album"
          onClick={() => {
            setProduct(emptyProduct);
            setSubmitted(false);
            setProductDialog(true);
          }}
        />
      )
    );
  };

  const openAlbum = (albumIndex) => {
    navigate(`/photogallery/album/${albumIndex}`);
  };

  // const deleteAlbum = (albumIndex) => {
  //   if (window.confirm("Are you sure you want to delete this album?")) {
  //     setProducts(products.filter((_, idx) => idx !== albumIndex));
  //   }
  // };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  // const addAlbum = () => {
  //   // const title = prompt("Enter album title:");
  //   // const cover = prompt("Enter cover image URL:");
  //   // if (title && cover) {
  //   //   setProducts([...products, { title, cover, images: [] }]);
  //   // }
  // };

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
          saveAlbum();
        }}
      />
    </React.Fragment>
  );

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className="gallery-container">
        <Toast ref={toast} />

        <Toolbar
          className="mb-4"
          start={startToolbarTemplate}
          end={endToolbarTemplate}
        ></Toolbar>

        <div>
          <div className="album-grid">
            {!products.length && (
              <React.Fragment>
                {" "}
                <Message
                  severity="info"
                  text={
                    "No Albums are yet Uploaded in " + filterRange.getFullYear()
                  }
                />
              </React.Fragment>
            )}
            {products.map((product, idx) => (
              <div key={idx} className="album-card">
                <img
                  src={product.cover}
                  alt={product.title}
                  className="album-cover"
                  onClick={() => openAlbum(product.id)}
                />
                <h3>{product.title}</h3>
                <p>{product.noImages} Photos</p>
                {dynamicMetaData.writePermission && (
                  <React.Fragment>
                    {" "}
                    <Button
                      severity="info"
                      icon="pi pi-pencil"
                      rounded
                      onClick={() => editProduct(product)}
                    />
                    <Button
                      severity="danger"
                      icon="pi pi-trash"
                      rounded
                      onClick={() => confirmDeleteProduct(product)}
                    />
                  </React.Fragment>
                )}
              </div>
            ))}
          </div>
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
            <label htmlFor="title" className="font-bold">
              Album Title
            </label>

            <InputText
              value={product.title}
              onChange={(e) => {
                console.log(e);
                onInputChange(e, "title");
              }}
              required
              className={classNames({
                "p-invalid": submitted && !product.title,
              })}
              placeholder="Album Title"
            />

            {submitted && !product.title && (
              <small className="p-error">Album Title is required.</small>
            )}
          </div>

          <div className="field">
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

          <div className="field">
            <label htmlFor="attachedFiles" className="font-bold">
              Attach Images
            </label>
            <FileUpload
              id="attachedFiles"
              name="attachedFiles[]"
              ref={uploadRef}
              // mode="basic"
              // url={"/api/upload"}
              multiple={true}
              accept="image/*"
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
                Are you sure you want to delete the Album:{" "}
                <b>{product.title}</b>?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </BaseLayout>
  );
}
