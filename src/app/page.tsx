import { Submenu } from "@/app/components/home/submenu";
import { getDataHome } from "@/app/utils/actions/get-data";
import { HomeProps } from "@/app/utils/home.type";
import { Hero } from "@/app/components/hero";
import { Phone } from "lucide-react";
import { Services } from "@/app/components/home/services";
import { Container } from "@/app/components/container";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services object={object} />
      </Container>
    </main>
  );
}
