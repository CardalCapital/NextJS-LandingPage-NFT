import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

/* Animation */

import AOS from 'aos';
import 'aos/dist/aos.css';

/* Web3 */

import { useWeb3 } from '@3rdweb/hooks';

export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { connectWallet, address, error, disconnectWallet } = useWeb3();
  error ? console.log(error) : null;

  return (
    <header
      className={styles.header}
      data-aos='fade-in'
      data-aos-delay='50'
      data-aos-duration='2500'
    >
      <a
        className={styles.logo}
        href='/E'
        data-aos='fade-right'
        data-aos-delay='50'
        data-aos-duration='2500'
      >
        <Image src='/logo.png' alt='' width={100} height={40} />
        {/*<img src='./logo.png' alt='' />*/}
      </a>
      <input className={styles.menuBtn} type='checkbox' id='menu-btn' />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.menuIcon} htmlFor='menu-btn'>
        <span className={styles.navicon} />
      </label>
      <ul className={styles.menu}>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link href='#faqs'>FAQs</Link>
        </li>
        <li>
          <Link href='#team'>Team</Link>
        </li>
        <li>
          <Link href='#contact'>Contact</Link>
        </li>
        <li
          className={styles.btnWallet}
          data-aos='fade-down'
          data-aos-delay='50'
          data-aos-duration='2000'
        >
          <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100'>
            {address ? (
              <button onClick={() => disconnectWallet()}>{address}</button>
            ) : (
              <button onClick={() => connectWallet('injected')}>
                Connect Wallet
              </button>
            )}
          </div>
        </li>
      </ul>
    </header>
  );
}
