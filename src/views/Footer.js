import React from 'react';
import "../assets/footer.css"

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className="footer-container">
            <hr />
                <div className="row">
                    {/*Column1*/}
                    <div className="col">

                        <ul className="list-unstyled">
                            <li> <img src="https://image.flaticon.com/icons/svg/174/174869.svg" width="60px" alt=""/></li>
                            <li><img src="https://image.flaticon.com/icons/svg/174/174848.svg" width="60px" alt=""/></li>
                            <li><img src="https://www.flaticon.com/svg/vstatic/svg/1409/1409946.svg?token=exp=1619010146~hmac=139a683ca90e2c0859c2b12541a7da90" width="60px" alt=""/></li>
                            <li><img src="https://www.flaticon.com/svg/vstatic/svg/124/124015.svg?token=exp=1619010501~hmac=ba6acebed39d03bc90b5eb72acf55bc0" width="60px" alt=""/></li>
                        </ul>
                    </div>
                    {/*Column1*/}
                    <div className="col">
                     
                        <ul className="list-unstyled">
                            <div>CONTACT INFORMATION :</div>
                            <div>555-277-1234</div>
                            <div>SomethingInc@gmail.com</div>
                            <div>987 F street, NorthEast</div>
                            <div>Washington D.C 20002</div>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} SOMETHING INC | All rights reserved | Terms of Service | Privacy 

                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;