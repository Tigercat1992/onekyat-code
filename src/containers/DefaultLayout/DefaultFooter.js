import React, { Component, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

class DefaultFooter extends Component {
  render() {
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment >
        <footer className="footer">
          <div className="copyright-content clearfix">© 2020 by OneKyat.</div>
          <div className="footer-content">
            <a href="#">{"စည်းမျဉ်းသတ်မှတ်ချက်"}</a>
            <span>|</span>
            <a href="#">{"FAQ"}</a>
            <span>|</span>
            <a href="#">{"လုံခြုံရေးမူဝါဒ"}</a>
          </div>
          {/* <div className="address">+95 XXXX XXXX • address ... </div> */}
          <div className="social-wrapper clearfix">
            <a href="https://www.facebook.com/onekyat_app/" target="_blank" className="social-wrapper-item">
              <FontAwesomeIcon icon={faFacebookSquare} color={"#ffffff"} size="2x" />
            </a>
            <a href="https://www.instagram.com/onekyat_app/" target="_blank" className="social-wrapper-item">
              <FontAwesomeIcon icon={faInstagramSquare} color={"#ffffff"} size="2x" />
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;


