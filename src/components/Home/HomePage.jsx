import './HomePage.scss';
import HomeTitle from './HomeTitle';
import HomeGithub from './HomeGithub';
import HomeMembers from './HomeMembers';
import HomeFooter from './HomeFooter';
import HomeContent from '../HomeContent/HomeContent';

export default function HomePage() {

  return (
    <div className="home-page">
      <HomeTitle />
      <HomeGithub />
      <HomeMembers />
      <HomeContent />
      <HomeFooter />
    </div>
  );
}
