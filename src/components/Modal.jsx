import React from "react";

function Modal() {
  return (
    <>
      <div
        className="modal fade"
        id="modalShowcase"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-dark"
                id="staticBackdropLabel"
              ></h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="modalB" className="modal-body text-dark">
              <div id="playerRatio" className="ratio ratio-16x9"></div>
            </div>
            <div className="modal-footer text-dark justify-content-start">
              <div className="col">
                <div id="githubLink" className="row-1">
                  GitHub
                </div>
                <div id="vercelLink" className="row-1">
                  Vercel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
