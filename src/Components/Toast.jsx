import React from 'react';


export default function Toast() {
  return (
    <div className="toast align-items-center text-bg-danger border-0 bottom-0 end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true" style={{marginTop: '10%'}}>
  <div className="d-flex">
    <div className="toast-body">
      Hi user, Please check your internet connect
    </div>
    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
  )
}
