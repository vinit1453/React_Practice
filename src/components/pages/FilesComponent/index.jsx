import React, { useEffect, useState } from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router";
export default function FilesComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("props", location.state);
  const folder = location.state;
  return (
    <>
      <div
        className="bg-secondary mx-auto w-90 mt-4 overflow-auto"
        style={{ height: "400px" }}
      >
        <div className=" ">
          <span className="" onClick={() => navigate(-1)}>
            Back
          </span>
          <h1 className="text-center">Files</h1>
        </div>
        <hr />
        <div
          className={
            "folderContainer2  d-flex container-fluid flex-wrap  gap-2"
          }
        >
          {folder.photos.length > 0 ? (
            folder.photos.map((e, i) => (
              <>
                <div
                  className="folder card-body d-flex flex-column align-items-center  w-25"
                  key={i}
                  onClick={() => {
                    console.log(" selected folder", e);
                  }}
                >
                  <div className="folder_ImageContainer">
                    <img
                      src={e.photoUrl}
                      onerror={(e) => {
                        // src = "/images/617.jpg";
                        'this.onerror=null;this.src="/images/617.jpg"';
                        console.log(e);
                      }}
                      className="folder-Icon"
                    />
                  </div>
                  <div className="folderFooter">
                    <span className="folderName">
                      {e.photoUrl
                        .toString()
                        .replace(/\s{1,}/g, " ")
                        .trim()}
                    </span>
                    {/* <span className="folderCount">({e.photos.length})</span> */}
                  </div>
                </div>
              </>
            ))
          ) : (
            <>
              <p className="text-white fw-3 text-center">No Files Present</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
