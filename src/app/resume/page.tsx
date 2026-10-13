import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé | Faiza Khan",
  description: "Faiza Khan, UX and Product Designer with 4+ years of experience.",
};

export default function ResumePage() {
  return (
    <main className={styles.viewer}>
      <header className={styles.toolbar}>
        <Link href="/">← Back to portfolio</Link>
        <h1>Faiza Khan · Résumé</h1>
      </header>
      <div className={styles.sheet}>
        <nav className={styles.contactLinks} aria-label="Résumé contact links">
          <a
            className={`${styles.contactLink} ${styles.emailLink}`}
            href="mailto:faizakhan1012@gmail.com"
            aria-label="Email Faiza Khan"
          />
          <a
            className={`${styles.contactLink} ${styles.portfolioLink}`}
            href="https://kfstarls.github.io/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Faiza Khan’s portfolio"
          />
          <a
            className={`${styles.contactLink} ${styles.linkedinLink}`}
            href="https://www.linkedin.com/in/faiza-khan-348a9818b/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Faiza Khan’s LinkedIn profile"
          />
          <a
            className={`${styles.contactLink} ${styles.phoneLink}`}
            href="tel:+919630448610"
            aria-label="Call Faiza Khan at +91 9630448610"
          />
        </nav>
        <Image
          src="/faiza-khan-resume.png"
          alt="Faiza Khan's résumé. UX and Product Designer with 4+ years of experience, including Capgemini. Skills, professional experience, education and academic projects."
          width={1190}
          height={1684}
          unoptimized
          preload
          className={styles.document}
        />
      </div>
    </main>
  );
}
