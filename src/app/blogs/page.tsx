import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";
import styles from "../page.module.css";
import grid from "./blogsGrid.module.css";

export default function BlogPage() {
  return (
      <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}> My Blog </h1>
        <div className={grid.container}>
          <section className={grid.grid}>
            {blogs.map((blog) => (
              <BlogPreview key={blog.slug} blog={blog} />
            ))}
          </section>
        </div>
      </div>
  );
}



