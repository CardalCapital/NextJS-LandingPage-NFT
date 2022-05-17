import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';

const About = () => {
  return (
    <div
      className={styles.about}
      data-aos='fade-up'
      data-aos-delay='50'
      data-aos-duration='2500'
      id='about'
    >
      <div className={styles.row}>
        <div className={styles.content}>
          <Image src='/about.png' alt='' width={450} height={450} />
        </div>
        <div className={styles.content}>
          <h1>Welcome to the new age</h1>
          <p>
            An NFT is a digital asset that represents real-world objects like{' '}
            <br />
            art, music, in-game items and videos. They are bought and sold{' '}
            <br />
            online, frequently with cryptocurrency, and they are generally{' '}
            <br />
            encoded with the same underlying software as many cryptos.
          </p>
          <a
            href=''
            data-aos='zoom-in-up'
            data-aos-delay='50'
            data-aos-duration='2500'
          >
            Get More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
