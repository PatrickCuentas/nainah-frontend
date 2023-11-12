"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CartModal from "../../app/(home)/cart/components/CartModal.jsx";
import { useHome } from "@/lib/context/HomeContext.jsx";
import useScrollListener, { useScroll } from "@/lib/hooks/useScrollListener.js";
import { useEffect } from "react";
import { cn } from "../utils.js";

const isActive = (href, path) => {
  if (href === path) {
    return "before:w-full";
  } else {
    return "hover:before:w-full";
  }
};

const navMenu = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About us",
    href: "/about"
  },
  {
    name: "Catalogs",
    href: "/about"
  },
  {
    name: "Coupons",
    href: "/about"
  },
  {
    name: "Shop",
    href: "/about"
  }
];

const navMenuIcon = [
  {
    name: "Wishlist",
    href: "/",
    isButton: false,
    icon: "/icons/hearth.svg",
    className: "w-[1.5rem] h-[1.3rem]"
  },
  {
    name: "Search",
    href: "/",
    isButton: false,
    icon: "/icons/search.svg",
    className: "w-[1.5rem] h-[1.3rem]"
  },
  {
    name: "Account",
    href: "/profile",
    isButton: false,
    icon: "/icons/user.svg",
    className: "w-[1.5rem] h-[1.3rem]"
  },
  {
    name: "Cart",
    icon: "/icons/cart.svg",
    isButton: true,
    onClick: () => setIsOpenModal(true),
    className: "w-[1.2rem] h-[1.4875rem] pt-[.0625rem] relative top-[2px]"
  }
];

export default function Nav() {
  const [navClassList, setNavClassList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { settings } = useHome();
  const path = usePathname();

  const scroll = useScrollListener();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 50)
      _classList.push("bg-white [box-shadow:1px_3px_4px_rgba(0,0,0,0.25)]");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <nav
        className={cn(
          "h-[4.375rem] sticky z-[999] top-0 left-0 w-full px-[3rem] -mb-[70px] transform transition-all duration-300 ease-in-out opacity",
          navClassList
        )}
      >
        <div className="flex flex-wrap items-center justify-between h-full">
          <div className="flex gap-4 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={settings?.site_logo}
                width={33}
                height={33}
                className="mr-6"
                alt="Logo"
              />
            </Link>
            <ul className="font-medium flex max-md:flex-col max-md:p-4 max-md:mt-4 rounded-lg max-lg:hidden md:space-x-8">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`text-[0.875rem] block py-2 pl-3 pr-4 md:p-0 uppercase relative before:absolute before:content-[''] before:w-0  before:-bottom-1  before:h-[1px] ${isActive(
                      item.href,
                      path
                    )} before:bg-black before:transition-[width_600ms] before:duration-300 ease-in-out`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="font-medium flex gap-[1.8rem] w-max items-center">
            {navMenuIcon.map((item, index) => (
              <li key={index}>
                {item?.isButton ? (
                  <button onClick={item.action}>
                    <Image
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={item.name}
                      className={item.className}
                    />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <Image
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={item.name}
                      className={item.className}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CartModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
}
