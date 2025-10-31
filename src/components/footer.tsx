import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>© 2025 Piolo's Personal Website. All rights reserved.</p>
        </footer>
    );
}