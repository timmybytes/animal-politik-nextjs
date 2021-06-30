import Button from '@components/Button/Button';
import SocialMenu from '@components/SocialMenu/SocialMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { slide as MenuContainer } from 'react-burger-menu';
import styles from './Navbar.module.scss';

const Menu = ({ visible, onChange }) => {
  const router = useRouter();
  const [active, setActive] = useState('none');

  useEffect(() => {
    setActive(router.pathname);
  });

  const handleChange = e => {
    onChange(!visible);
  };

  return (
    <MenuContainer isOpen={visible}>
      <Button type='tracklist__flat' onClick={handleChange}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
          <path d='M0 0h24v24H0z' fill='none' />
        </svg>
      </Button>
      <ul className={styles.menu}>
        <Button type='tracklist__flat' onClick={handleChange}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </Button>
        <li onClick={handleChange}>
          <Link href='/'>
            <a
              style={
                active === '/'
                  ? {
                      borderBottom: '2px solid #64a7f5',
                      fontSize: '105%',
                      transition: '.2s',
                    }
                  : { borderBottom: 'none' }
              }>
              Home
            </a>
          </Link>
        </li>
        <li onClick={handleChange}>
          <Link href='/about'>
            <a
              style={
                active === '/about'
                  ? {
                      borderBottom: '2px solid #64a7f5',
                      fontSize: '105%',
                      transition: '.2s',
                    }
                  : { borderBottom: 'none' }
              }>
              About
            </a>
          </Link>
        </li>
        <li onClick={handleChange}>
          <Link href='/music'>
            <a
              style={
                active === '/music'
                  ? {
                      borderBottom: '2px solid #64a7f5',
                      fontSize: '105%',
                      transition: '.2s',
                    }
                  : { borderBottom: 'none' }
              }>
              Music
            </a>
          </Link>
        </li>
        <li onClick={handleChange}>
          <Link href='/contact'>
            <a
              style={
                active === '/contact'
                  ? {
                      borderBottom: '2px solid #64a7f5',
                      fontSize: '105%',
                      transition: '.2s',
                    }
                  : { borderBottom: 'none' }
              }>
              Contact
            </a>
          </Link>
        </li>
      </ul>
      {/* <SocialMenu /> */}
    </MenuContainer>
  );
};

export default Menu;