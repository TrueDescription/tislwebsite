import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";

export default function HomeNavbar() {
  return (
    <div>
      <Navbar isBordered>
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p>Toronto Intelligent Systems Lab</p>
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="people">
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
            <Link color="foreground" href="#">
              <img className="material-symbols-outlined" src="/icons/mail.svg" alt="Icon" />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
