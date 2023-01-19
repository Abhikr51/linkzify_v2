import React from 'react'
import congo from '../../assets/images/congo.png'
const Userpage = () => {
  const copyContent = async () => {

    try {
      await navigator.clipboard.writeText("{{re_url}}");
      alert('Content copied to clipboard');
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      alert('Failed to copy');
      /* Rejected - text failed to copy to the clipboard */
    }
  }
  return (
    <React.Fragment>
      <div className="container p-4">
        <div className="row justify-content-center my-3">
          <div className="col-md-9">
            <div id="greeting box" className="card">
              <h3 className="card-header text-center">Secret Message</h3>
              <div className="card-body">
                <img src={congo} width="100%" alt="" />
                <h5 className="text-danger text-center"> Please screenshot your login details </h5>
                <div className="row justify-content-center">
                  <div style={{ textAlign: 'right' }} className="col-6 text-right">
                    Username :
                  </div>
                  <div className="col-6">
                    <span className="bg-warning rounded-2 p-1 px-3">{'request.user.get_username'}</span>
                  </div>

                </div>
                <div className="row justify-content-center">
                  <div style={{ textAlign: 'right' }} className="col-6">
                    Password :
                  </div>
                  <div className="col-6 ">
                    <span className="p-1 px-3">{'request.user.last_name'}</span>
                  </div>
                </div>
                <br />
                <h5 className="text-center">Your link has been generated Successfully</h5>
                <p className="text-center">Now share your link with your friends:</p>
                <div className="form-group">
                  <div className='form-control' >
                    {'re_url'}
                  </div>

                </div>
                <div className="row py-3 align-items-center">
                  <div className="col-md-5">
                    <div className="d-grid">
                      <a href="whatsapp://send?text={re_url}" data-action="share/whatsapp/share"
                        className="btn btn-success">SHARE ON WHATSAPP</a>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    Or,
                  </div>
                  <div className="col-md-5">
                    <div className="d-grid">
                      <button onClick={copyContent} className="btn btn-secondary">COPY YOUR LINK</button>
                    </div>
                  </div>

                </div>
                <ul className="py-3">
                  <li>Copy and share your link to instagram, facebook and twitter.</li>
                  <li>You can take sceenshot and share your unknown message on whatsapp and etc.</li>
                  <li>To view message: Use your login username and password given.</li>
                  <li>Scroll down to check your received messages.</li>
                </ul>
              </div>
            </div>
            <br />
            <div className="card">
              <div className="card-body">
                <div className="d-grid">
                  <button onClick={()=>window.location.reload()} style={{ cursor: 'pointer' }}
                    className="btn-primary btn text-white">Refresh your messages.
                  </button>
                </div>
                <div className="message-box ">
                  <p className="p-3 text-white">{'i.msg'}</p>
                </div>
                <div className="message-box ">
                  <h2 className="text-center p-5 text-white">No Mesagess yet </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Userpage