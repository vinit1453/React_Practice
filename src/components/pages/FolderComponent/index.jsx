import React, { useState, useEffect } from "react";
import "./index.css";
import FilesComponent from "../FilesComponent";
import { useNavigate } from "react-router";
function folderComponent() {
  const [data, setData] = useState([]);
  const [folders, setFolders] = useState([]);
  const [show, setShow] = useState(false);
  const [files, setFiles] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    if (data.length) {
      // console.log("folder updating");
      setFolders(groupByFolderName);
    }
  }, [data]);

  const groupByFolderName = data.reduce((prev, curr, i, e) => {
    // if (prev.some(checkAlbumPresence(prev, curr.albumId))) {

    // }
    let albumObject = prev.filter((e) => {
      return e.albumId.toLowerCase() === curr.albumId.toLowerCase();
    });
    if (albumObject.length > 0) {
      const currentAlbum = albumObject[0];
      currentAlbum.photos.push(curr);
    } else {
      prev.push({ albumId: curr.albumId, photos: [curr] });
    }
    return prev;
  }, []);

  function checkAlbumPresence(e, currentId) {
    console.log("checkPresence ", e);
    console.log(currentId);
    if (e.length > 0) {
      return e.albumId.toLowerCase() === currentId.toLowerCase();
    }
    return false;
  }

  const load = async () => {
    await fetch("http://localhost:3000/folders")
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log("unable to fetch folder data", e);
      });
  };
  return (
    // <>
    //   {folders.length > 0 ? (
    //     folders.map((e, i) => (
    //       <>
    //         <div key={i}>
    //           {e.albumId}-{e.photos[0].albumName}({e.photos.length})
    //           {e.photos.length > 0 ? (
    //             <>
    //               {e.photos.map((photo, index) => (
    //                 <div key={index}>
    //                   {/* <p>{JSON.stringify(photo)}</p> */}
    //                   <p>{photo.photoUrl}</p>
    //                 </div>
    //               ))}
    //             </>
    //           ) : (
    //             <>
    //               <div key={i}>
    //                 <p>{e.photos.toString()}</p>
    //               </div>
    //               ;
    //             </>
    //           )}
    //         </div>
    //       </>
    //     ))
    //   ) : (
    //     <>
    //       <p>No Folder are Present</p>
    //     </>
    //   )}
    // </>
    <>
      <div
        className="bg-secondary mx-auto w-90 mt-4 overflow-auto"
        style={{ height: "400px" }}
      >
        <h1 className="text-center">Folders</h1>
        <hr />
        {/* {show && <FilesComponent props={files} />} */}
        <div
          className={
            "folderContainer2  d-flex container-fluid flex-wrap  gap-2"
          }
        >
          {folders.length > 0 ? (
            folders.map((e, i) => (
              <>
                <div
                  className="folder card-body d-flex flex-column align-items-center  w-25"
                  key={i}
                  onClick={() => {
                    // console.log(" selected folder", e);
                    // setFiles(e);
                    // setShow(true);
                    navigate("/files", { state: e });
                  }}
                >
                  <div className="folder_ImageContainer">
                    <img
                      src={"/images/folder_Icon1.jpeg"}
                      onError={
                        'this.onerror=null;this.src="/images/folder_icon2.jpeg";'
                      }
                      className="folder-Icon"
                    />
                  </div>
                  <div className="folderFooter">
                    <span className="folderName">
                      {e.photos[0].albumName.replace(/\s{1,}/g, " ").trim()}
                    </span>
                    <span className="folderCount">({e.photos.length})</span>
                  </div>
                </div>
              </>
            ))
          ) : (
            <>
              <p className="text-white fw-3 text-center">No Folders Present</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default folderComponent;
