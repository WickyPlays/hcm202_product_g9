import './HomePage.scss';
import HomeTitle from './HomeTitle';
import HomeGithub from './HomeGithub';
import HomeMembers from './HomeMembers';
import { useState, useEffect } from 'react';

export default function HomePage() {

  return (
    <div className="home-page">
      <HomeTitle />
      <HomeGithub />
      <HomeMembers />
    </div>
  );
}
