import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Navlink = ({ href, text, _toggleSidebar }) => {
  const router = useRouter();
  const currentPathname = router.pathname;
  const isActive = currentPathname === href;
  return (
    <li
      className={`${isActive ? "nav-list-active" : "nav-list"} `}
      onClick={_toggleSidebar}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default Navlink;
