import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "./NavLink";
import { userService } from "../services/service";
import { StyledNav, StyledNavItem } from "@/styles/styledComponents";
import { IUserStorageObject, Paths } from "@/naming";
import { signout } from "@/pages/appSlice";

export function Nav() {
  const [user, setUser] = useState<null | IUserStorageObject>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = userService.user.subscribe((singleUser) =>
      setUser(singleUser)
    );
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
    dispatch(signout());
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <StyledNav>
      <NavLink href={Paths.HOME} exact>
        <StyledNavItem>Home</StyledNavItem>
      </NavLink>
      <NavLink href={Paths.CHARTS} exact>
        <StyledNavItem>Charts</StyledNavItem>
      </NavLink>
      <a onClick={logout}>
        <StyledNavItem>Logout</StyledNavItem>
      </a>
    </StyledNav>
  );
}
