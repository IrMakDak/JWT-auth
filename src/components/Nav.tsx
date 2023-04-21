import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "./NavLink";
import { userService } from "../services/service";
import { Link } from "./Link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  StyledNav,
  StyledLogo,
  StyledNavLinks,
  StyledLogin,
  StyledLinkText,
  StyledLogedAccaunt,
  StyledDropDown,
  StyledMenu,
  StyledButtons,
} from "@/styles/StyledNav";
import { IUserStorageObject, Paths, srcStore } from "@/naming";
import { signout } from "@/pages/appSlice";
import { selectCount, selectUser } from "../pages/appSlice";

export function Nav() {
  const [user, setUser] = useState<null | IUserStorageObject>(null);

  const authorizedStatus = useSelector(selectCount);
  const { userFirstName, userSecondName } = useSelector(selectUser);
  const dispatch = useDispatch();

  const { pathname } = useRouter();

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
  if (pathname === Paths.LOGIN) {
    return null;
  }

  return (
    <StyledNav>
      <Link href={Paths.HOME}>
        <StyledLogo>
          <Image
            src={`${srcStore}/Logo-expanded.svg`}
            alt="logo"
            width={195}
            height={35}
          />
        </StyledLogo>
      </Link>
      <StyledNavLinks>
        <NavLink href={Paths.HOME} exact>
          <StyledLinkText>О нас</StyledLinkText>
        </NavLink>
        <NavLink href={Paths.CHARTS} exact>
          <StyledLinkText>Платформа</StyledLinkText>
        </NavLink>
        <StyledLinkText>Портфолио</StyledLinkText>
        <StyledLinkText>Контакты</StyledLinkText>
      </StyledNavLinks>

      <StyledButtons>
        {userFirstName && userSecondName ? (
          <StyledDropDown>
            <StyledLogedAccaunt>
              {userFirstName} {userSecondName?.slice(0, 1)}.
            </StyledLogedAccaunt>
            <div className="drop-content">
              <StyledLogin onClick={logout}>Выйти</StyledLogin>
            </div>
          </StyledDropDown>
        ) : (
          <StyledLogin onClick={logout}>Войти</StyledLogin>
        )}
        <StyledDropDown>
          <StyledMenu>&#9776;</StyledMenu>
          <div className="drop-menu">
            <NavLink href={Paths.HOME} exact>
              <StyledLinkText>О нас</StyledLinkText>
            </NavLink>
            <NavLink href={Paths.CHARTS} exact>
              <StyledLinkText>Платформа</StyledLinkText>
            </NavLink>
            <StyledLinkText>Портфолио</StyledLinkText>

            <StyledLinkText>Контакты</StyledLinkText>
          </div>
        </StyledDropDown>
      </StyledButtons>
    </StyledNav>
  );
}
