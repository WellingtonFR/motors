import Image from "next/image";
import styles from "./page.module.css";
import { Submenu } from "./components/home/submenu";
import { HomeProps } from "./utils/home.type";

import { getDataHome } from "./utils/actions/get-data";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  console.log(object.title);

  return (
    <main>
      <Submenu />
    </main>
  );
}
