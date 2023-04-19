import NextLink from "next/link";
import { IProps } from "@/naming";

export function Link({ href, children, ...props }: IProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
