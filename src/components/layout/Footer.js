import React from 'react';

const Footer = () => {
    return(
        
        <footer className="page-footer blue-grey lighten-3">

            <div className="row">
              <div className="col m3 s12">
                <h5 className="white-text">Project Management made easy</h5>
                <p className="grey-text text-lighten-4">Easily organise your team projects</p>
                <p className="grey-text text-lighten-4">Send tips for extra features</p>
              </div>


              <div className="col m9 s12">
                <h5 className="white-text center">Useful Links</h5>

                <div className="row">

                  <div className="col s6 m4">
                    <li><a className="blue-text" href="https://duckduckgo.com/">DuckDuckGo</a></li>
                    <li><a className="blue-text" href="https://www.google.com/">Google</a></li>
                    <li><a href="https://www.bing.com/" className="blue-text">Bing</a></li>
                    <li><a href="http://swiped.co/" className="blue-text">Swiped</a></li>
                    <li><a href="https://urbanthesaurus.org/" className="blue-text">Urban Thesaurus</a></li>
                  </div>

                  <div className="col s6 m4">
                    <li><a className="blue-text" href="https://trends.google.com/trends/?geo=US">Google Trends</a></li>
                    <li><a className="blue-text" href="https://search.google.com/search-console/about">Google Search Console</a></li>
                    <li><a className="blue-text" href="https://developers.google.com/speed/pagespeed/insights/">Google Page Speed</a></li>
                    <li><a href="https://www.semrush.com/" className="blue-text">semrush</a></li>
                    <li><a href="https://www.labnol.org/internet/mobile-reverse-image-search/29014/" className="blue-text">Reverse Image Search</a></li>
                  </div>

                  <div className="col s6 m4">
                    <li><a href="https://www.canva.com/" className="blue-text">Canva</a></li>
                    <li><a href="http://www.watchcount.com/" className="blue-text">watchcount</a></li>
                    <li><a href="https://adespresso.com/" className="blue-text">adespresso</a></li>
                    <li><a href="https://ahrefs.com/" className="blue-text">ahrefs</a></li>
                    <li><a href="https://buzzsumo.com/" className="blue-text">BuzzSumo</a></li>
                  </div>

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