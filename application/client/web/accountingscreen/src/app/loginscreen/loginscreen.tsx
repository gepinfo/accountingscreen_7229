import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./loginscreen.scss";
import  {service}   from './loginscreen.service';

class Loginscreen extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    app : {
    name: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ app: { ...this.state.app, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.app.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">loginscreen</h2>
        <div id="template-isvn" className="gjs-row">
    <div id="template-iwqv" className="gjs-cell">
        <div id="template-ix5t6" className="gjs-row">
            <div id="template-ix4oh" className="gjs-cell"></div>
        </div>
        <div id="template-ictg">The GST Council Has Made E-Invoicing Mandatory for Businesses with a Turnover
            Of ₹10Cr. Or More From October 2023. 10Decoders Books Is Here To Help.</div>
        <div
        id="template-ihzr" className="gjs-row">
            <div id="template-ijc9" className="gjs-cell"></div>
    </div>
    <div id="template-ihxdj" className="gjs-row">
        <div id="template-iomak" className="gjs-cell">
            <div id="template-iz9hl">Reach Out To Support.</div>
            <div id="template-i433j">For More Info.</div>
        </div>
    </div>
</div>
<div id="template-i3a4" className="gjs-cell">
    <div id="template-ir5f4">Login</div>
    <input id="template-i7h1i" placeholder="Your Email or Phone Number"
    className="input form-control " />
    <input id="template-ioido" placeholder="Password" className="input form-control "
    />
    <div id="template-i9mea" className="gjs-row">
        <div id="template-ii091" className="gjs-cell">
            <input type="checkbox" id="template-ia9di" className="checkbox form-control "
            />
            <div id="template-ibsp9">Remember me</div>
        </div>
        <div id="template-ib1qk" className="gjs-cell">
            <div id="template-ixu0e">Forgot Password</div>
        </div>
    </div>
    <div id="template-io2af" className="gjs-row">
        <div id="template-itchi" className="gjs-cell">
            <button id="template-irlwj" className="button btn btn-primary ">Login</button>
        </div>
        <div id="template-ish4c" className="gjs-cell">
            <button id="template-iqltn" className="button btn btn-primary ">Sign Up
                <br id="template-iu5z8"></br>
            </button>
            <div id="template-iq5o5" className="gjs-row">
                <div id="template-iiqxh" className="gjs-cell"></div>
            </div>
        </div>
    </div>
    <div id="template-i6wik" className="gjs-row">
        <div id="template-iylo1" className="gjs-cell">
            <div id="template-icpnj">Sign In With Google</div>
        </div>
    </div>
</div>
</div>
    </>
    );
    };
    };

    export default Loginscreen;