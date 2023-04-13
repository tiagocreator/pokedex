import { FooterStyle } from '../styles/FooterStyles';

const Footer = () => {
  return (
    <FooterStyle>
      Pokedex by{' '}
      <a href='https://github.com/tiagocreator' target='_blank'>
        {' '}
        @tiagocreator
      </a>
    </FooterStyle>
  );
};

export default Footer;
