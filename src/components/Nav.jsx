import { useState, useEffect } from "react";

import { NavLink } from "./NavLink";
import { userService } from "../services/service";
import { StyledNav, StyledNavItem } from "@/styles/styledComponents";

export function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <StyledNav>
      <NavLink href="/" exact>
        <StyledNavItem>Home</StyledNavItem>
      </NavLink>
      <NavLink href="/charts" exact>
        <StyledNavItem>Charts</StyledNavItem>
      </NavLink>
      <a onClick={logout}>
        <StyledNavItem>Logout</StyledNavItem>
      </a>
    </StyledNav>
  );
}
