import { Link } from 'react-router-dom';
import { Conteiner } from './styles';
import {
  IconEnvelope,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconLocation,
  IconPhone,
  IconPinterest,
  IconTwitter
} from '../../helpers/Icon';
function Footer() {
  return (
    <Conteiner>
      <div className="alinhamento">
        <div className="conteiners">
          <div className="conteiner">
            <h3>Contact Us </h3>
            <span className='iconConteiner'>
              <IconLocation  className='icon'/>
              <a href="#">Location</a>
            </span>
            <span className='iconConteiner'>
              <IconPhone className='icon'/>
              <a href="tel=+01 1234567890">Call +01 1234567890</a>
            </span>
            <span className='iconConteiner'>
              <IconEnvelope className='icon'/>
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </span>
          </div>
          <div className="conteiner">
            <h2>Feane</h2>
            <p>
              Necessary,making this the first true generator on the Internet. It
              uses a dictionary of over 200 Latin words, combined with
            </p>
            <nav>
              <ul className='icons-social'>
                <li>
                  <Link>
                    <IconFacebook className='icon'/>
                  </Link>
                </li>
                <li>
                  <Link>
                    <IconTwitter className='icon'/>
                  </Link>
                </li>
                <li>
                  <Link>
                    <IconLinkedin className='icon'/>
                  </Link>
                </li>
                <li>
                  <Link>
                    <IconInstagram className='icon' />
                  </Link>
                </li>
                <li>
                  <Link>
                    <IconPinterest className='icon' />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="conteiner">
            <h3>Opening Hours</h3>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <footer >
          <p>© 2023 All Rights Reserved By Free Html Templates</p>
          <p>© Distributed By ThemeWagon</p>
        </footer>
      </div>
    </Conteiner>
  );
}

export default Footer;