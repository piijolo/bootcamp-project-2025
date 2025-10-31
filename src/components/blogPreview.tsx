// src/components/BlogPreview.tsx
import React from "react";
import Image from "next/image";
import styles from "./blogPreview.module.css";
import Link from "next/link";
import type { Blog } from "@/app/blogData";


export default function BlogPreview({ blog }: { blog: Blog }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </h2>
        <p className={styles.date}>Posted on: {blog.date}</p>
        <p className={styles.desc}>{blog.description}</p>
        <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
          Read More →
        </Link>
      </div>
    </article>
  );
}
