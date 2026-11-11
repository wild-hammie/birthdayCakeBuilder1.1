
import { useEffect, useRef } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const title = useRef(null);
  const subtitle = useRef(null);
  const image = useRef(null);
  const button = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(title.current, {
      y: -50,
      opacity: 0,
      // rotation: -3,
      duration: 1,
      ease: "back.out(1.7)",
    })
      .from(
        subtitle.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.4"
      )
      .from(
        image.current,
        {
          scale: 0.7,
          rotation: 5,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      )
      .from(
        button.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3"
      );

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#a9433d", "#d98b91", "#f7efe2", "#573b30"],
    });

    return () => {
      tl.kill();
    };
  }, []);

  function startBuilding() {
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.7 },
      colors: ["#a9433d", "#d98b91", "#f7efe2"],
    });

    setTimeout(() => {
      navigate("/builder");
    }, 350);
  }

  return (
    <main className="home">
      <p className="home-label">A SPECIAL LITTLE BAKERY</p>

      <h1 ref={title}>Happy Birthday, Sheida!</h1>

      <p ref={subtitle} className="home-subtitle">
        One birthday. One cake. Questionable decorations(Don't put radioactive shit on your cake!).
      </p>

      <div ref={image} className="home-image">
        <img
          src={`${import.meta.env.BASE_URL}assets/birthday/birthday.png`}
          alt="Birthday illustration"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* <span>YOUR BIRTHDAY PICTURE GOES HERE</span> */}
      </div>

      <button
        ref={button}
        className="start-button"
        onClick={startBuilding}
      >
        Let's Bake a Cake
      </button>
    </main>
  );
}
