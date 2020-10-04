import { Logo, Menu, MenuItem, NavbarSTyle } from "./navbarStyle";
import Link from "next/link";

interface IProps {
  title: string;
}

export default function Navbar({ title }: IProps) {
  return (
    <NavbarSTyle>
      <Logo>
        <h1>I4SAPP</h1>
      </Logo>

      <Menu>
        <Link href="/">
          <MenuItem active={title === "/" ? true : false}>Home</MenuItem>
        </Link>
        <Link href="/perfil">
          <MenuItem>User</MenuItem>
        </Link>{" "}
      </Menu>
    </NavbarSTyle>
  );
}
