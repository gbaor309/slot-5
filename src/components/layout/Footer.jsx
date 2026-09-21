import { APP_NAME } from '../../data/menu';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
    </footer>
  );
};
export default Footer;