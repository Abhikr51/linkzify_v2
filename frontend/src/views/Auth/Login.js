import React from 'react'

export default function Login() {
  return (
    <React.Fragment>
      <div style={{height: 'calc(100vh - 102px)'}} className="container p-3">
        <div className="row justify-content-center py-5 align-items-center h-100">
          <div className="col-md-4 col-10">
            <div className="card p-5">
              <form >
              <h3 className="card-title">Login</h3>
              <div className="card-body p-0">
                <div className="form-group py-2">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group py-2">
                  <label for="password">Password</label>
                  <input type="password" name="password" className="form-control" />
                </div>

                <div className="d-grid my-3">
                  <button className="btn btn-outline-primary">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </React.Fragment >
  )
}
