import Link from 'next/link';
import styles from './styles.module.scss';

export default function Accordion() {
  return (
    <div
      className={styles.accordion}
      data-aos='zoom-in-up'
      data-aos-delay='50'
      data-aos-duration='2500'
      id='faqs'
    >
      <h1>FAQs</h1>
      <div className={styles.card}>
        <details className={styles.warning}>
          <summary>
            What technologies were used on this site? <span>+</span>
          </summary>
          <p>NetxJS, TypeScript and SCSS</p>
        </details>

        <details>
          <summary>
            Wath is my github? <span>+</span>
          </summary>
          <Link href='https://gomestzx.github.io'> gomestzx.github.io </Link>
        </details>

        <details className={styles.alert}>
          <summary>
            Check more projects <span>+</span>
          </summary>
          <Link href='https://gomestzx.github.io'> gomestzx.github.io </Link>
          <Link href='https://capfinanceira.com.br'>capfinanceira.com.br</Link>
          <Link href='https://github.com/gomestzx/covidapp'> CovidApp </Link>
        </details>
      </div>
    </div>
  );
}
