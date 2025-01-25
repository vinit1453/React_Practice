import React, { useState, useEffect } from "react";
import { array } from "yup";
import "./fileUploader.css";
const FileUploader = () => {
  const [files, setFiles] = useState([]);

  return (
    <>
      <SingleFileUploader />
      <hr />
      <MultiFileUploader />
      <hr />
      <DragDrop1 height={"300px"} width={"200px"} onFilesSelected={setFiles} />
    </>
  );
};

export default FileUploader;

function SingleFileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-around">
        <div className="input-group">
          <input id="file" type="file" onChange={handleFileChange} />
        </div>
        <div>
          <div className="vr" />
          {file && (
            <section>
              File details:
              <ul>
                <li>Name: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Size: {file.size} bytes</li>
              </ul>
            </section>
          )}
        </div>
      </div>
      {file && (
        <button onClick={() => handleUpload(file)} className="submit">
          Upload a file
        </button>
      )}
    </>
  );
}

function MultiFileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files);
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-around">
        <div className="input-group">
          <input id="file" type="file" multiple onChange={handleFileChange} />
        </div>
        {file &&
          [...file].map((f, index) => (
            <>
              <section key={f.name}>
                File number {index + 1} details:
                <ul>
                  <li>Name: {f.name}</li>
                  <li>Type: {f.type}</li>
                  <li>Size: {f.size} bytes</li>
                </ul>
              </section>
              <div className="vr" />
            </>
          ))}
      </div>
      {file && (
        <button onClick={() => handleUpload(file)} className="submit">
          Upload a file
        </button>
      )}
    </>
  );
}

const DragDrop1 = ({ onFilesSelected, width, height }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <>
      <section className="drag-drop " style={{ width: width, height: height }}>
        <div
          className={`document-uploader ${
            files.length > 0 ? "upload-box active" : "upload-box"
          }`}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <>
            <div className="upload-info">
              <div>
                <p>Drag and drop your files here</p>
                <p>
                  Limit 15MB per file. Supported files: .PDF, .DOCX, .PPTX,
                  .TXT, .XLSX
                </p>
              </div>
            </div>
            <input
              type="file"
              hidden
              id="browse"
              onChange={handleFileChange}
              accept=".pdf,.docx,.pptx,.txt,.xlsx"
              multiple
            />
            <label htmlFor="browse" className="browse-btn">
              Browse files
            </label>
          </>

          {files.length > 0 && (
            <div className="file-list">
              <div className="file-list__container">
                {files.map((file, index) => (
                  <div className="file-item" key={index}>
                    <div className="file-info">
                      <p>{file.name}</p>
                      {/* <p>{file.type}</p> */}
                    </div>
                    <div className="file-actions">
                      <button onClick={() => handleRemoveFile(index)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {files.length > 0 && (
          <div className="success-file">
            <p>{files.length} file(s) selected</p>
          </div>
        )}
      </section>
      {files && (
        <button onClick={() => handleUpload(files)} className="submit">
          Upload a file
        </button>
      )}
    </>
  );
};
const handleUpload = async (files) => {
  if (files) {
    // console.log("Uploading file...");

    const formData = new FormData();
    // formData.append("file", files);

    try {
      // You can write the URL of your server or any other endpoint used for file upload
      // const result = await fetch("https://httpbin.org/post", {
      //   method: "POST",
      //   body: formData,
      // });

      // const data = await result.json();
      if (typeof file == array) {
        [...files].forEach((file) => {
          console.log("file data", file);
          //   formData.append("files", file);
        });
      } else {
        console.log("file data", files);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
