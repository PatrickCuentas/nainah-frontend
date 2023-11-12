import Carousel from "@/lib/ui/Carousel";
import { SwiperSlide } from "swiper/react";
import BasicProductCarrousel from "@/lib/ui/BasicProductCarrousel";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Title from "@/lib/ui/Title";
import { useHome } from "@/lib/context/HomeContext";
import Container from "@/lib/ui/Container";

export default function HandbagsSection() {
  const { handbags } = useHome();
  const breakpoint = useBreakpoint();

  const slides = handbags.map((_, i) => (
    <SwiperSlide
      key={i}
      className={`${
        breakpoint === "desktop" && handbags.length < 6 ? "flex-1" : "flex-none"
      }`}
    >
      <BasicProductCarrousel />
    </SwiperSlide>
  ));

  return (
    <>
      {handbags.length > 0 && (
        <Container size="lg">
          <section className="px-0 lg:px-[3rem]">
            <Title
              name="New Handbags"
              description="Discover a stunning collection of products that combine style and functionality."
            />
            <Carousel slides={slides} />
          </section>
        </Container>
      )}
    </>
  );
}
