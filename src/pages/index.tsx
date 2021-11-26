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
      </Head>
      <Background />
      <main className={styles.main}>
        <h1 className={styles.title}>Hey, I&apos;m David</h1>

        <p className={styles.description}>
          I&apos;m David, an aerospace engineer, roboticist and software
          developer based in Sydney
        </p>
        <div className={styles.body}>
          <p>
            As an aerospace engineer turned startup founder, software developer
            and roboticist, I give a damn about clean code, open-source and
            robots for good. I&apos;ve developed control systems for high
            altitude autonomous balloons, augmented reality that runs on
            hundreds of commercial aircraft, collaborative open-source platforms
            for scientists and engineers, optical radar search and rescue
            systems, fully autonomous and remote-operated boats, and mission
            systems for depth-defying submarines exploring the Mariana Trench.
          </p>
          <p>
            I&apos;m constantly (and somewhat obsessively) learning - spanning
            the entire tech stack from UI/UX and front-end progressive web
            applications to data science, computer vision and robotic control
            systems. I pride myself on pragmatic, concise, readable and
            performant code, while my UI sensibilities tend towards sci-fi
            futurism. Whether navigating the stratosphere or the deepest depths
            of the ocean, I hope to build creative tech solutions that
            contribute to our collective knowledge.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/revay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/linkedin.png"
              alt="Linkedin Logo"
              width={32}
              height={32}
            />
          </span>
        </a>

        <a
          href="https://github.com/MrBlenny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/github.png" alt="Github Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  );
}
