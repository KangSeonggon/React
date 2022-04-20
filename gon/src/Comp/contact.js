import React from "react";

function Contact() {
    return(
        <section className='contact' id='contact'>
          <div className='overlay'>
            <div className='container'>
              <h1>Contact</h1>
              <p>Hi Friends</p>
              <form action='https://formspree.io/f/xlezpzqa' method='POST'>
                <input type="text" name='Name' placeholder='Name' required></input>
                <input type="email" name='Email' placeholder='Email' required></input>
                <input type="text" name='Subject' placeholder='Subject' required></input>
                <textarea name='Message' placeholder='Message' required></textarea>
                <input type='submit' value="Submit" className="btn btn-primary"></input>
              </form>
            </div>
          </div>
        </section>
       
    )
}

export default Contact;