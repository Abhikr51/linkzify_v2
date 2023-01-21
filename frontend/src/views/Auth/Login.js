import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import Loader from '../../components/Loader';
import { setLogin } from '../../store/actions/AuthActions';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const loginUser = (event) => {
    setLoading(true)
    event.preventDefault();
    dispatch(setLogin(username, password, () => {
      setLoading(false)
    },(err)=>{
      alert(err.response.data.msg)
      setLoading(false)
    }))
  }
  return (
    <React.Fragment>
      <div style={{ height: 'calc(100vh - 102px)' }} className="container p-3">
        <div className="row justify-content-center py-5 align-items-center h-100">
          <div className="col-md-4 col-10">
            <div className="card p-5">
              <form onSubmit={loginUser} >
                <h3 className="card-title">Login</h3>
                <div className="card-body p-0">
                  <div className="form-group py-2">
                    <label htmlFor="username">Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" className="form-control" />
                  </div>
                  <div className="form-group py-2">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" className="form-control" />
                  </div>

                  <div className="d-grid my-3">
                    <button type='submit' className="btn btn-outline-primary"> {loading ? <Loader /> : 'Sign In'}</button>
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
