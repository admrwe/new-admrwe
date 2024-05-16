import Image from "next/image";
import styles from "./page.module.css";
import { NameBlock } from "./components/NameBlock";

export default function Home() {
  return (
    <main>
      {/* Adam Rowe, design systems engineer, designer, musician */}
      <NameBlock />
    </main>
  );
}
