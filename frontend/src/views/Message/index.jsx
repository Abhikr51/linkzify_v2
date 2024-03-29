import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL, get_name_from_usernameURL, sendMessageURL } from '../../config/AppData';
import { encryptedLocalStorage } from '../../config/lib';

const Message = () => {
  const [message, setMessage] = useState("")
  const params = useParams()
  const [name, setName] = useState("")
  const navigate = useNavigate()
  const sendMessage = (event) => {
    event.preventDefault();
    axios.post(baseURL + sendMessageURL + "/" + atob(params.username), { message }).then(({ data }) => {
      if (data.status) {
        alert(data.msg);
        let vxx_id = encryptedLocalStorage.getItem("vxx_id")
        if (vxx_id) {
          vxx_id = JSON.parse(vxx_id);
          vxx_id = [...vxx_id, data.data]
          vxx_id = JSON.stringify(vxx_id)
          encryptedLocalStorage.setItem("vxx_id", vxx_id)
        } else {
          vxx_id = JSON.stringify([data.data])
          encryptedLocalStorage.setItem("vxx_id", vxx_id)

        }
        navigate('/')
      }
    }).catch(err => {
      console.log("sendMessage", err);
    })
  }
  const fetchName = async () => {
    await axios.post(baseURL + get_name_from_usernameURL, {
      username: atob(params.username)
    }).then(({ data }) => {
      if (data.status) {
        setName(data.data)
      }
    })
  }
  useEffect(() => {
    fetchName()
  }, [])
  return (
    <React.Fragment>
      <div className="fireworks">
        <h1 className="text-center pt-5">Year's first secret message to Your friend !</h1>
        <h4 className="text-center pt-2 blink">Happy new year 2023</h4>
        <div className="container p-4 ">
          <div className="row justify-content-center my-3">
            <div className="col-md-8">
              <div id="greeting box" className="card">
                <h3 className="card-header text-center">Secret Message</h3>
                <div className="card-body">
                  <form onSubmit={sendMessage}>
                    <div className="form-group">
                      <textarea onChange={(e) => setMessage(e.target.value)} value={message} rows="6" required name="message" className="form-control"
                        placeholder="Enter Your Secret message"></textarea>
                    </div>
                    <div className="d-grid gap-2 my-3">
                      <button type="submit" className="btn btn-outline-dark">Send</button>
                    </div>
                  </form>
                  <ul>
                    <li>Let's play and have fun with <span
                      className="text-primary">{name}</span>.
                    </li>
                    <li>Send your message secretly to <span
                      className="text-primary">{name}</span>.
                    </li>
                    <li><span className="text-primary">{name}</span> will never know who
                      messaged.
                    </li>
                  </ul>
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
            <p><span className="text-primary">Secret Message</span> allows you to receive anonymous messages from your
              friends anonymously. It’s you discover
              your strengths and areas for improvement by receiving honest, constructive feedback from your employees
              and your friends.</p>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Message