// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <h1 className="page-title">oh hey! | About Me</h1>

      <div className="about">
        <div className="about-image">
          <img
            src="/images/Piolo_Train.jpg"
            alt="Piolo on a train. Holding up a peace sign and smiling. No visible text in the image."
            width="300"
            height="400"
          />
        </div>

        <div className="about-text">
          <p>
            Hello Everyone! My name is <strong>Piolo Santiago</strong>. I am a
            first year <em>Computer Engineering</em> major.
          </p>
          <p>I am from Ventura County, California.</p>
          <p>
            In my free time, I enjoy swimming, playing Clash Royale, watching
            Netflix documentaries, and food.
          </p>
          <p>A fun fact about me is that I love to bake banana bread!</p>
        </div>
      </div>
    </main>
  );
}
