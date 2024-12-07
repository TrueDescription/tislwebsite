"use client";

import React from "react";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { SearchIcon } from "./SearchIcon";

interface HomeNavbarProps {
  activePage: "home" | "people" | "publications" | "teaching" | "opportunities";
}

export default function HomeNavbar({ activePage }: HomeNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "People", href: "/people", key: "people" },
    { name: "Publications", href: "/publications", key: "publications" },
    { name: "Teaching", href: "/teaching", key: "teaching" },
    { name: "Join Us", href: "/opportunities", key: "opportunities" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold text-xl lg:text-xl transition-all duration-300">
            Toronto Intelligent Systems Lab
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link
              color="foreground"
              href={item.href}
              className={`text-sm lg:text-base transition-all duration-300 ${activePage === item.key ? "border-b-2 border-blue-500" : ""}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link color="foreground" href="/contact">
            <img
              className="material-symbols-outlined w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300"
              src="/icons/mail.svg"
              alt="Contact"
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={
              <SearchIcon size={24} width={24} strokeWidth={1.5} height={24} />
            }
            type="search"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link
              color={activePage === item.key ? "primary" : "foreground"}
              className="w-full text-base lg:text-lg transition-all duration-300"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="/contact"
            className="text-base lg:text-lg transition-all duration-300"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
