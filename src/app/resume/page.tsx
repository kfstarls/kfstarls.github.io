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
