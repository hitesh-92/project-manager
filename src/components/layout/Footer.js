import React from 'react';

const Footer = () => {
    return(
        
        <footer className="page-footer blue-grey lighten-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Project Management made easy</h5>
                <p className="grey-text text-lighten-4">Easily organise your team projects</p>
                <p className="grey-text text-lighten-4">Send tips for extra features</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Useful Links</h5>
                <ul>
                  <li><a className="blue-text" href="https://trends.google.com/trends/?geo=US">Google Trends</a></li>
                  <li><a className="blue-text" href="https://search.google.com/search-console/about">Google Search Console</a></li>
                  <li><a className="blue-text" href="https://developers.google.com/speed/pagespeed/insights/">Google Page Speed</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                Copyright © 2019 Project Management
                <a href="mailto:hiteshgohil@hotmail.co.uk" className="blue-text text-darken-2 right">
                    Contact Here
                </a>
            </div>
          </div>
        </footer>
            
    )
}

export default Footer