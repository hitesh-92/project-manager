import React from 'react';

const Footer = () => {
    return(
        
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Project Management made easy</h5>
                <p className="grey-text text-lighten-4">You can easily organise your team projects</p>
                <p className="grey-text text-lighten-4">Send tips for extra features</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Useful Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://trends.google.com/trends/?geo=US">Google Trends</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://search.google.com/search-console/about">Google Search Console</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://developers.google.com/speed/pagespeed/insights/">Google Page Speed</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                Copyright © 2019 Copyright Project Management
                <a href="mailto:hiteshgohil@hotmail.co.uk" className="grey-text text-lighten-4 right">
                    Contact Here
                </a>
            </div>
          </div>
        </footer>
            
    )
}

export default Footer