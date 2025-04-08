import React from 'react'
import './footer.css'

export default function Footer(){
    return(
        <div className="container">
            <div className="footer">
                <div className="line"></div>
                <br/>
               
                <p className='logo'>XFOLIO.</p>
                <div className="row" style={{position:"relative", top:"-60px",left:"900px",width:"280px"}}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <p style={{position:"relative", top:"-80px"}}>&copy;Rishabh Verma</p>
            </div>
        </div>
    )
}