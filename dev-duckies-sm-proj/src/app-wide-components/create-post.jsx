import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true;

export default function CreatePost(){
  const [post_content, setPost_content] = useState()
  const [username, setUsername] = useState()
  const [pic, setPic] = useState()

  function handleChange(event) {
    setPost_content(event.target.value)
  }

  function sharePost(event) {
    event.preventDefault()
    axios.post('http://localhost:8080/posts', {post_content})
    .then(res => {console.log(res)})
    .catch(error => {console.log(error.response.data.error)})
  }

  useEffect(() => {
    axios.get('http://localhost:8080/profile')
    .then(res => { setUsername(res.data.profile.username) })
    .catch(error => console.log(error.response.data.error));

    //below axios request is a test of updating profile with new profile image

    // axios.put(`http://localhost:8080/profile`, 
    //   {
    //     profile_picture : "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"
    //   }
    // ).then(res => {}).catch(error => console.log(error.response.data.error));
    axios.get(`http://localhost:8080/profile/user/${username}`)
    .then(res => { setPic(res.data.profile_picture) })
    .catch(error => console.log(error.response.data.error));
  }, [username, pic])
  
  return (
      <>
        <div className = "card m-6">
          {/*Bellow is navbar that will also contain user pic and name*/}
            <div className="card">
                <header className="card-header is-flex-direction-row is-align-items-center p-4">
                  <figure className= "image is-48x48 is-square mr-5 ml-3">
                      <img className= "is-rounded" src={`data:image/png;base64,${pic}`} alt="ProfilePicture"/>
                  </figure>
                      <p>{username}</p>
                </header>
             </div>
               {/*Bellow is text form in order to write and submit post*/}
              <form className="text-form" onSubmit={sharePost}>
                <textarea className="textarea is-primary  is medium" type="text" placeholder="Share your thoughts..." onChange={handleChange}  value={post_content}></textarea>
                <button className="button is-primary">Share</button>
              </form>
              {/*May be rethink the footer. Need an exit out button*/}
              {/*This is the footer at the bottom of my card
                <div className="card">
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>*/}
            </div>
      </>
    )
}
