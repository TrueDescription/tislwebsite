import {Link} from "@nextui-org/link";
import React from 'react';


import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem} from "@nextui-org/navbar";

export default function HomeNavbar() {
  return (
    <div>
    
      <Navbar isBordered>
        <NavbarBrand>
          <p>Toronto Intelligent Systems Lab</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              People
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Publications
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Teaching
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Join Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <img className="material-symbols-outlined" src="/icons/mail.svg" alt="Icon" />
          </NavbarItem>
          <NavbarItem>
            <img className="material-symbols-outlined" src="/icons/search.svg" alt="Icon" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
