import { useRouter } from "next/router";
import { Link } from "./Link";
import { CSSActiveClass, IProps } from "../naming";

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
