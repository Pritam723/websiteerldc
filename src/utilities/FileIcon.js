export const getFileIcon = (fileName) => {
  let iconClass = "pi pi-file";
  let colorClass = "black";
  if (!fileName)
    return <i className={iconClass} style={{ color: "slateblue" }}></i>;
  const fileExt = fileName.split(".");
  if (fileExt.length < 2)
    return <i className={iconClass} style={{ color: "slateblue" }}></i>;

  const ext = fileExt[fileExt.length - 1];

  if (ext == "xlsx" || ext == "xls" || ext == "xlsm" || ext == "csv") {
    iconClass = "pi pi-file-excel";
    colorClass = "green";
  } else if (ext == "pdf") {
    iconClass = "pi pi-file-pdf";
    colorClass = "red";
  } else if (ext == "docx" || ext == "doc") {
    iconClass = "pi pi-file-word";
    colorClass = "slateblue";
  } else if (ext == "png" || ext == "jpeg" || ext == "jpg") {
    iconClass = "pi pi-image";
    colorClass = "orange";
  }
  return <i className={iconClass} style={{ color: colorClass }}></i>;
};
