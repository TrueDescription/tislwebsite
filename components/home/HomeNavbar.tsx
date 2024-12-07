"use client";

import React from "react";
import { useRouter } from "next/router";
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

export default function HomeNavbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "People", href: "/people" },
    { name: "Publications", href: "/publications" },
    { name: "Teaching", href: "/teaching" },
    { name: "Join Us", href: "/opportunities" },
  ];

  return (
    <div className="w-full">
      <Navbar className="max-w-full p-0 mt-0" position="static">
        <NavbarContent className="flex items-center w-full">
          <NavbarBrand className="mr-6">
            <Link color="foreground" href="/">
              <p className="font-bold text-xl lg:text-xl transition-all duration-300">
                Toronto Intelligent Systems Lab
              </p>
            </Link>
          </NavbarBrand>

          <NavbarMenuToggle
            aria-label="Toggle Navigation Menu"
            className="block lg:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-4" justify="end">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                color="foreground"
                href={item.href}
                className={`text-sm lg:text-base transition-all ${
                  currentPath === item.href ? "border-b-2 border-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <Link color="foreground" href="/contact">
              <img
                className="material-symbols-outlined w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300"
                src="/icons/mail.svg"
                alt="Contact"
              />
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="left-0">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                color={currentPath === item.href ? "primary" : "foreground"}
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
    </div>
  );
}
