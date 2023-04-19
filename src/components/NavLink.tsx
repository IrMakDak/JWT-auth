import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Link } from "./Link";
import { CSSActiveClass, IProps } from "../naming";

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

export function NavLink({ children, href, exact, ...props }: IProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += CSSActiveClass;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
    
  );
}
