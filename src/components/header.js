import React from "react";
import photo from "../img/photo_2022-09-18_12-17-17.jpg";
import Maillogo from "../icons/icons8-mail-30.png";
import LinkedIn from "../icons/icons8-linkedin-circled-30.png";

export default function Header(){
    return(
        <div className="head-info">
            <img className="my-photo" src={photo} alt="my-img"/>
            <h1 className="my-name">Viacheslav Moroz</h1>
            <h3 className="my-title">Front-end Developer</h3>
            <h4 className="my-site">Viacheslav.website</h4>
            <div className="links">
                <a className="email-block" href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new">
                    <img className="my-mail" src={Maillogo} alt="mail" />
                    <h2 className="email-text">email</h2>
                </a>
                <a className="linkedin-block" href="https://www.linkedin.com/in/viacheslav-moroz-60a451213/">
                    <img className="my-li" src={LinkedIn} alt="li" />
                    <h2 className="li-text">LinkedIn</h2>
                </a>
            </div>
        </div>
    )
}