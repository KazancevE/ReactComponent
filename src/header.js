import {Component} from "react";

import headerLogo from "./img/myPhotoIcon.jpg";
import Vector from "./img/Vector.png";
import ACADEMY from "./img/ACADEMY.png";
import './header.css';



class Header extends Component {
    render () {
        return (
            <div className="header">
                <div style={{display: "flex",}}>
                    <img src={headerLogo} style={{maxHeight: '52px', maxWidth: '52px'}} alt={''}/>
                    <p className="headerUserName" >Егор Казанцев</p>

                </div>
                <div style={{display: "flex", flexDirection:"column"}} >
                    <img src={Vector} style={{marginBottom:"7px"}} alt=""/>
                    <img src={ACADEMY} alt=""/>
                </div>
                    <button className="btnHeader"><p>Панель управления</p></button>
            </div>
        )
    }
}

export default Header;