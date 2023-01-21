import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { register } from '../../store/actions/AuthActions';

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const create_user = (event) => {
    event.preventDefault();
    setLoading(true)
    dispatch(register(name, () => {
      setLoading(false)
    }, (err) => {
      setLoading(false)
      alert(err.response.data.msg)
    }))
  }
  return (
    <React.Fragment>
      <div className="container p-4">
        <div className="row justify-content-center my-3">
          <div className="col-md-8">
            <div id="greeting box" className="card">
              <h3 className="card-header text-center">Secret Message</h3>
              <div className="card-body">
                <ul>
                  <li>Enter your Name, Create Secret Message link and Share with your friends on Whatsapp,
                    Facebook.
                  </li>
                  <li>Get unknown feedback from your friends, co-workers, and Fans.</li>
                  <li>Once your friends send you a message, you will see the results on a Message board.</li>
                </ul>
                <form onSubmit={create_user} >
                  <div className="form-group">
                    <input required type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder="Enter Your name" />
                  </div>
                  <div className="d-grid gap-2 my-3">
                    <button type="submit" className="btn btn-outline-dark">{loading ? <Loader /> : 'Create Your Link'}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <h3>This Secret Message app is only for your best friends?</h3>
          <p>No, you can also share the dare link with everyone in your WhatsApp contacts or the Facebook friends list
            and ask them to reply to the dare link. By doing this, you will be able to know how people think about
            you
            in general. And Ask your friends to join this platform and send their unique links too so that you can
            compliment them anonymously.</p>
        </div>

        <div className="row py-4">
          <h3>Our Focus?</h3>
          <p>We focus on friendship, and you guys may confess, tell secrets to each other, publicly or
            anonymously.</p>
        </div>
        <div className="row py-4">
          <h3>Is this app safe?</h3>
          <p>Yes, The platform is safer than ever, as we are continuously working on the user experience to make the
            game more fun. We do care about safety. If you feel unsafe, you can deactivate your account first.</p>
        </div>
        <div className="row py-4">
          <h3>What is a Secret Message?</h3>
          <p> <span className="text-primary">Secret Message</span>  allows you to receive anonymous messages from your friends anonymously. It’s you discover
            your strengths and areas for improvement by receiving honest, constructive feedback from your employees
            and your friends.</p>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Home