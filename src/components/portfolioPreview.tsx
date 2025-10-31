import React from "react";
import Image from "next/image";
import styles from "./portfolioPreview.module.css";
import Link from "next/link";
import type { Project } from "@/app/projectData";

export default function PortfolioPreview({ project }: { project: Project }) {
  const isExternal = project.link?.startsWith("http");
  const CardLink = isExternal ? "a" : Link;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {isExternal ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            <Link href={project.link}>{project.title}</Link>
          )}
        </h2>

        <p className={styles.meta}>Posted on: {project.date}</p>
        <p className={styles.desc}>{project.description}</p>

        {isExternal ? (
          <a
            className={styles.cta}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        ) : (
          <Link className={styles.cta} href={project.link}>
            View Project →
          </Link>
        )}
      </div>
    </article>
  );
}