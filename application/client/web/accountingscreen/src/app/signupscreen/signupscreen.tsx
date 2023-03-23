import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./signupscreen.scss";
import  {service}   from './signupscreen.service';

class Signupscreen extends React.Component<any, any> {
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
        <h2 className="screen-align">signupscreen</h2>
        <div id="template-ibur" className="gjs-row">
    <div id="template-io7z" className="gjs-cell">
        <div id="template-i4t79">Sign Up</div>
        <div id="template-iohcl" className="gjs-row">
            <div id="template-ivffn" className="gjs-cell">
                <div id="template-i1ve4">Already Have A 10Decoders Book Account?</div>
            </div>
        </div>
    </div>
    <div id="template-i8bxf" className="gjs-cell">
        <div id="template-iho1t" className="gjs-row">
            <div id="template-inbe9" className="gjs-cell">
                <input placeholder="Company Name" id="template-iz97l" className="input form-control "
                />
            </div>
            <div id="template-ijga5" className="gjs-cell">
                <input placeholder="Email Address" id="template-i2b9o" className="input form-control "
                />
            </div>
        </div>
        <div id="template-idvp8" className="gjs-row">
            <div id="template-imvki" className="gjs-cell">
                <input placeholder="Mobile Number" id="template-iqcdl" className="input form-control "
                />
            </div>
            <div id="template-iai8w" className="gjs-cell">
                <input placeholder="Password" id="template-iyw6i" className="input form-control "
                />
            </div>
        </div>
        <div id="template-ioqpx" className="gjs-row">
            <div id="template-ifuh7" className="gjs-cell">
                <select id="template-ixis9" className="select ">
                    <option value="" id="template-i328y">- Select option -</option>
                    <option id="template-i5tdh">Option 1</option>
                </select>
            </div>
            <div id="template-iwboh" className="gjs-cell">
                <select id="template-il7xq" className="select ">
                    <option value="" id="template-i2o5i">- Select option -</option>
                    <option id="template-iwb4h">Option 1</option>
                </select>
            </div>
        </div>
        <div id="template-iyiz8" className="gjs-row">
            <div id="template-izhoo" className="gjs-cell">
                <div id="template-issvi">Your data will be in INDIA data center.</div>
                <div id="template-ilwtk"
                className="gjs-row">
                    <div id="template-ixp92" className="gjs-cell">
                        <input type="checkbox" id="template-iuhli" className="checkbox form-control "
                        />
                        <div id="template-ikbml">I Agree To The</div>
                        <div id="template-i0y5g">and</div>
                    </div>
                </div>
            </div>
            <div id="template-ily9v" className="gjs-cell">
                <button id="template-if1j8" className="button btn btn-primary ">Create Account</button>
            </div>
        </div>
    </div>
    <div id="template-is0h" className="gjs-cell"></div>
    <div id="template-ine2o" className="gjs-cell">
        <div id="template-igolf" className="gjs-row">
            <div id="template-i7mju" className="gjs-cell">
                <div id="template-irhkf">Sign In With Google</div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Signupscreen;