import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact() {
    return(
        <footer>
        <div className='container'>
          <div className='copyright'>
            Copyright &copy; Gonn
          </div>
          <div className='socials'>
            <a href='https://github.com/KangSeonggon' target='_blank'><AiFillGithub /></a>
            <a href='https://www.linkedin.com/in/seonggon-kang-6a7b91237/' target='_blank'><AiFillLinkedin /></a>
          </div>
        </div>
        
      </footer>
       
    )
}

export default Contact;