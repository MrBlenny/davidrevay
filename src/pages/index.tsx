import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Background from '@/components/background';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Revay</title>
        <meta
          name="description"
          content="Aerospace Engineer + Software Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Background />
      <main className={styles.main}>
        <h1 className={styles.title}>Hey, I&apos;m David</h1>

        <p className={styles.description}>
          I&apos;m an aerospace engineer turned startup founder, software
          developer and roboticist based in Sydney, Australia. I give a damn
          about clean code, open-source and robots for good.
          <br />
          <br />
          I&apos;m currently working on autonomous boats, deep water subs and
          optical radars{` `}
          <a
            href="https://greenroomrobotics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Greenroom Robotics
          </a>
          .
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/MrBlenny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.logo}>
            <Image src="/github.png" alt="Github Logo" width={32} height={32} />
            CODE
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/revay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.logo}>
            <Image
              src="/linkedin.png"
              alt="Linkedin Logo"
              width={32}
              height={32}
            />
            BIO
          </div>
        </a>
      </footer>
    </div>
  );
}
