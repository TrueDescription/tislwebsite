import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { SearchIcon } from "./SearchIcon";

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
            <Link color="foreground" href="/people">
              People
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/publications">
              Publications
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/teaching">
              Teaching
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/opportunities">
              Join Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right-aligned section for mail icon and search bar */}
        <NavbarContent className="ml-auto">
          <NavbarItem>
            <Link color="foreground" href="/contact">
              <img
                className="material-symbols-outlined"
                src="/icons/mail.svg"
                alt="Icon"
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
                <SearchIcon
                  size={24}
                  width={24}
                  strokeWidth={1.5}
                  height={24}
                />
              }
              type="search"
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
