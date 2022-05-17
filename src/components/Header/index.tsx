import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

/* Animation */

import AOS from 'aos';
import 'aos/dist/aos.css';

/* Web3 */
import { injected } from "../../services/connector";
import { useWeb3React } from "@web3-react/core";


export default function Header() {
const { active, account, activate } = useWeb3React();
  const [accountAdress, setAccountAdress] = useState<string>("");

  async function tryRequestData(): Promise<boolean> {
    const isLogged = await injected.isAuthorized();
    return isLogged;
  }

  useEffect(() => {
    tryRequestData().then((response) => {
      if (response) {
        connect();
      }
    });
  }, []);

  useEffect(() => {
    if (account) {
      setAccountAdress(account);
    }
    console.log(accountAdress);
    AOS.init();
  }, []);

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  }

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
          <div>
            <button onClick={connect}>{active ? <span> {account}</span> : <span>Connect Wallet</span>}</button>
          </div>
        </li>
      </ul>
    </header>
  );
}
