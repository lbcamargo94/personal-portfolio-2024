import Link from "next/link";
type NavItemPropsType = {
  label: string;
  href: string;
};

export const NavItem = (props: NavItemPropsType) => {
  return (
    <Link href={props.href}>
      <span className="text-blue-600">#</span>
      {props.label}
    </Link>
  );
};
