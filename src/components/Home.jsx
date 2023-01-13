import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import hero from '../assets/img_1.png'
import '../style/home.css'
function home(){
    return(
        <div className={"row"}>
            <div className={"col-md-6"}>
                <div className={"col-md-6 col-sm-12 col-lg-6"}>
                    <img className={"hero-image"} src={hero} alt={"hero"}/>
                </div>
            </div>
            <div className={"col-md-6 col-md-6 col-sm-12 col-lg-6 hero-data"}>
                <div><h4 className={"text-light"}>Hi,</h4></div>
                <div><h3 className={"text-light"}>I'm <span style={{color: "red"}}>Moon Khan,</span> </h3></div>
                <div><h1 className={"text-light"} style={{fontSize:"4rem"}}>I build value through design.</h1></div>
                <div><h2 style={{color:"#C89190"}}>CSS / JavaScript / React </h2></div>
            </div>

        </div>
    )
}
export default home;