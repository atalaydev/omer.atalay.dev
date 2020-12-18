import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div className="App">

    <div className="alert atalay-dev-alert p-1 text-start text-sm-center" role="alert">
      Checkout <a href="https://github.com/atalaydev/sshb" target="_blank" rel="noopener noreferrer">sshb</a> - ssh bookmark manager written in Python.
    </div>

      <div className="container">

        <div className="row mt-5 text-center">
          <div className="col-10 offset-1">
            <div id="atalay-dev-logo">
              <div className="primary">
                <h1>/atalay.dev</h1>
              </div>
              <div className="secondary text-end">
                <p className="mb-0">DEVELOPER</p>
                <p className="mb-0">& OPEN</p>
                <p className="mb-0">SOURCERER</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 text-start text-sm-center">
          <div className="col-10 offset-1">
            <p style={{textAlign:"justify"}}>
              <b>Ömer Atalay</b> is an IT Team Lead <a href="https://www.linkedin.com/company/airties" target="_blank" rel="noopener noreferrer">@airties</a>, and writes  about web development, security, and software.
            </p>
          </div>
        </div>

        <div className="row mt-1 text-center">
          <div className="col-10 offset-1">
            <div className="social">
              <a href="https://github.com/atalaydev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github-square']} size="2x"/>
              </a>
              <a href="https://linkedin.com/in/omeratalay" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
              </a>
              <a href="https://twitter.com/atalaydev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
