import Image from 'next/image';
import styles from './styles.module.scss';

export default function Main() {
  return (
    <div className={styles.container}>
      <div
        className={styles.row}
        data-aos='fade-in'
        data-aos-delay='50'
        data-aos-duration='3000'
      >
        <h1>
          NFT UI Auth <br />
          with NextJS
          <br />
          by gomestzx
        </h1>
        <div className={styles.content}>
          <p>
            Check the source code <a>here</a>
          </p>
          <div className={styles.btnMain} style={{ display: 'none' }}>
            <a href='/te'>
              <button type='button'>Discover</button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.mainImg}>
          <Image
            src='/token.png'
            alt=''
            width={150}
            height={150}
            className={styles.token}
          />
          <Image
            src='/hand.png'
            alt=''
            width={400}
            height={400}
            className={styles.hand}
          />

          {/* <img className={styles.token} src="/token.png" alt="" data-aos="fade-in" data-aos-delay="80" data-aos-duration="3000" />
          <img className={styles.hand} src="/hand.png" alt="" data-aos="fade-left" data-aos-delay="80" data-aos-duration="3000" /> */}
        </div>
      </div>
    </div>
  );
}
