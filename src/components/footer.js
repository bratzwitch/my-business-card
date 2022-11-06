import React from "react";
import telegram from "../icons/icons8-telegram-app-48.png"
import instagram from "../icons/icons8-instagram-64.png"
import whatsapp from "../icons/icons8-whatsapp-48.png"
import github from "../icons/icons8-github-94.png"

export default function Footer(){
    return(
        <div className="icon-links">
            <div>
                <a className="telegram-block" href="https://t.me/newbratz">
                    <img className="tg-icon" src={telegram} alt="telegram" />
                </a>
            </div>
            <div>
                <a className="inst-block" href="https://www.instagram.com/bratzwitch_/">
                    <img className="my-inst" src={instagram} alt="instagram" />
                </a>
            </div>
            <div>
                <a className="wa-block" href="sdd">
                    <img className="my-wa" src={whatsapp} alt="whatsapp" />
                </a>
            </div>
            <div>
                <a className="git-block" href="https://github.com/bratzwitch">
                    <img className="my-git" src={github} alt="github" />
                </a>
            </div>
        </div>
    )
}