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
      <div>
        <h3>Contact Us </h3>
        <span>
          <IconLocation />
          <a href="#">Location</a>
        </span>

        <span>
          <IconPhone />
          <a href="tel=+01 1234567890">Call +01 1234567890</a>
        </span>

        <span>
          <IconEnvelope />
          <a href="mailto:demo@gmail.com">demo@gmail.com</a>
        </span>
      </div>

      <div>
        <h2>Feane</h2>
        <p>
          Necessary,making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with
        </p>

        <nav>
          <ul>
            <li>
              <Link>
                <IconFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <IconTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <IconLinkedin />
              </Link>
            </li>
            <li>
              <Link>
                <IconInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <IconPinterest />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h3>Opening Hours</h3>
        <p>Everyday</p>
        <p>10.00 Am -10.00 Pm</p>
      </div>

      <div>
        <p>© 2023 All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
      </div>
    </Conteiner>
  );
}

export default Footer;