import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar}>
      <h1 className={style.brand}> Piolo's Personal Website </h1>
      <nav>
        <ul className={style.navList}>
          <li><Link className={style.navLink} href="/">Home</Link></li>
          <li><Link className={style.navLink} href="/portfolio">Portfolio</Link></li>
          <li><Link className={style.navLink} href="/blogs">Blogs</Link></li>
          <li><Link className={style.navLink} href="/resume">Resume</Link></li>
          <li><Link className={style.navLink} href="/about">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}