import React from "react";

const Alert = React.forwardRef((props, ref) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        ref={ref}
        className="toast hide"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body bg-black text-white d-flex justify-content-between gap-2">
          <p className="mb-0">{props.msg}</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
});

export default Alert;
