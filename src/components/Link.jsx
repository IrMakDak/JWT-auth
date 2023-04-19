import NextLink from "next/link";

export function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
