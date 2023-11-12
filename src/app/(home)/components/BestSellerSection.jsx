import { useHome } from "@/lib/context/HomeContext";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Carousel from "@/lib/ui/Carousel";
import Container from "@/lib/ui/Container";
import ProductCarrousel from "@/lib/ui/ProductCarrousel";
import Title from "@/lib/ui/Title";

import { SwiperSlide } from "swiper/react";

export default function BestSellerSection() {
  const { trendingProducts } = useHome();
  const breakpoint = useBreakpoint();

  const slides = [
    ...trendingProducts,
    ...trendingProducts,
    ...trendingProducts
  ].map((item, i) => (
    <SwiperSlide
      key={i}
      // className={`min-w-[250px] ${
      //   breakpoint === "desktop" && trendingProducts.length < 4
      //     ? "flex-1"
      //     : "flex-none"
      // }`}
    >
      <ProductCarrousel
        key={i}
        title={item.title}
        image={item.image}
        oldPrice={item.variants[0].price}
        newPrice={item.variants[0].sale_price}
        category={item.category}
      />
    </SwiperSlide>
  ));

  return (
    <>
      {trendingProducts.length > 0 && (
        <Container size="lg">
          <div className="px-0 lg:px-[3rem] ">
            <Title
              name="Best Sellers"
              description="Discover a stunning collection of products that combine style and functionality."
            />
            <Carousel slides={slides} />
          </div>
        </Container>
      )}
    </>
  );
}
