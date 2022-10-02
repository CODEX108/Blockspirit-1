import "./TermStyle.css"
import {BsCurrencyBitcoin} from "react-icons/bs";

import React from 'react'

const Terminology = () => {
  return (
    <div className="terms">
        <div className="card-container">

            <div className="card">
                <h3>₿</h3>           
                      
                <span className="bar"></span>
                <p className="btc">Crypto</p>
                <p>The name cryptocurrency is a combination of cryptography and currency.
                 With cryptography, we use advanced math to secure our funds,
                 making sure that nobody else can spend them.</p>
            </div>

            <div className="card">
                <h4>Blockchain🅱</h4>
                <span className="bar"></span>
                <p className="btc">Blockchain</p>
                <p>A blockchain  Thickr change it in dfd fdshfsakddnsjhdfnldfnkdjffnufnlv any way.</p>
            </div>


            <div className="card">
                <h4>Trading💹</h4>
                <span className="bar"></span>
                <p className="btc">Trading</p>
                <p>Trading generallpositi returning adfdsfaflkj l df lasfh asfjkfdhk dgf profit.</p>
            </div>

        </div>
    </div>
  )
}

export default Terminology;