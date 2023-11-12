"use client";
import { useMemo } from "react";

import Link from "next/link";

import { useHome } from "@/lib/context/HomeContext";
import Container from "@/lib/ui/Container";
import Title from "@/lib/ui/Title";

function CustomImage({ src }) {
  return <img src={src} alt="" className="w-full h-full object-cover" />;
}

function CategoryItem({ category, children }) {
  return (
    <div
      className="relative"
      style={{
        gridArea: `img${category.id}`
      }}
    >
      {children}
    </div>
  );
}

const InsideLink = ({ title, href = "/", children }) => {
  return (
    <div className="relative h-full">
      {children}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href={href}
          style={{
            borderRadius: "0.25rem",
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.62) 100%)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          }}
          className="block text-xs lg:text-lg rounded-sm text-cpink-300 py-[5px] px-[13px]"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

const CategoryLink = ({ category }) => (
  <InsideLink title={category.title}>
    <CustomImage src={category.src} />
  </InsideLink>
);

const SeeMoreLink = ({ siteBanner }) => (
  <InsideLink title="SEE MORE">
    <img src={siteBanner} className="w-full h-full object-cover" />
  </InsideLink>
);

const WomensBags = () => (
  <div className="w-full h-full rounded-[20px] border-solid border-[1px] border-black flex flex-col items-center justify-center gap-2">
    <span className="text-xs">MODERNITY FOR YOU</span>
    <h3 className="text-base">WOMEN'S BAGS</h3>
    <button className="text-xs lg:text-lg border-[1px] border-solid border-black py-[5px] px-[13px]">
      BUY NOW
    </button>
  </div>
);

export default function CategoriesSection() {
  const { categories, settings } = useHome();

  const components = useMemo(() => {
    const categoryComponents = categories?.map((category) => ({
      id: category.id,
      render: () => <CategoryLink category={category} />
    }));

    const seeMoreComponent = {
      id: 3,
      render: () => (
        <SeeMoreLink siteBanner={settings.site_banner_collections} />
      )
    };

    const womensBagsComponent = {
      id: 5,
      render: () => <WomensBags />
    };

    return [...categoryComponents, seeMoreComponent, womensBagsComponent];
  }, [categories, settings]);

  return (
    <Container>
      <div className="px-[3rem] py-5">
        <Title
          name="CATEGORIES"
          description="Discover a stunning collection of products that combine style and functionality."
        />
        <div className="grid grid-gallery gap-4 mt-4">
          {(components || []).map((component) => {
            return (
              <CategoryItem category={component}>
                {component.render()}
              </CategoryItem>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
