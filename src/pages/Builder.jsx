
import { useEffect, useState } from "react";
import {
  cakes,
  frostings,
  jams,
  cherryOnTop,
} from "../data/cakeData";

const getCakeImage = (name) =>
  `${import.meta.env.BASE_URL}assets/Cake/${name} cake.png`;

const getFrostingImage = (file) =>
  `${import.meta.env.BASE_URL}assets/Frosting/${file}`;

const getJamImage = (file) =>
  `${import.meta.env.BASE_URL}assets/Jam/${file}`;

const getCherryImage = (file) =>
  `${import.meta.env.BASE_URL}assets/cherryOnTop/${file}`;


const emptyCake = {
  cake: "",
  frosting: "",
  jam: "",
  cherry: "",
};

export default function Builder() {
  const [state, setState] = useState(emptyCake);


  useEffect(() => {
    const saved = localStorage.getItem("cake-builder-1-1");

    if (saved) {
      try {
        setState({ ...emptyCake, ...JSON.parse(saved) });
      } catch {
        localStorage.removeItem("cake-builder-1-1");
      }
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(
      "cake-builder-1-1",
      JSON.stringify(state)
    );
  }, [state]);

  const resetCake = () => {
    setState(emptyCake);
    localStorage.removeItem("cake-builder-1-1");
  };

  return (
    <div className="builder">

      <div className="panel">

        <h2>Choose Your Cake</h2>

        {cakes.map((cake) => (
          <button
            key={cake}
            className={state.cake === cake ? "selected" : ""}
            onClick={() =>
              setState({ ...state, cake })
            }
          >
            {cake}
          </button>
        ))}

        <hr />

        <h2>Frosting</h2>

        <button
          className={!state.frosting ? "selected" : ""}
          onClick={() =>
            setState({ ...state, frosting: "" })
          }
        >
          No Frosting
        </button>

        {frostings.map((f) => (
          <button
            key={f.file}
            className={state.frosting === f.file ? "selected" : ""}
            onClick={() =>
              setState({ ...state, frosting: f.file })
            }
          >
            {f.name}
          </button>
        ))}

        <hr />

        <h2>Jam</h2>

        <button
          className={!state.jam ? "selected" : ""}
          onClick={() =>
            setState({ ...state, jam: "" })
          }
        >
          No Jam
        </button>

        {jams.map((j) => (
          <button
            key={j.file}
            className={state.jam === j.file ? "selected" : ""}
            onClick={() =>
              setState({ ...state, jam: j.file })
            }
          >
            {j.name}
          </button>
        ))}

        <hr />

        <h2>Cherry On Top</h2>

        <button
          className={!state.cherry ? "selected" : ""}
          onClick={() =>
            setState({ ...state, cherry: "" })
          }
        >
          No Cherry
        </button>

        {cherryOnTop.map((c) => (
          <button
            key={c.file}
            className={state.cherry === c.file ? "selected" : ""}
            onClick={() =>
              setState({ ...state, cherry: c.file })
            }
          >
            {c.name}
          </button>
        ))}

        <hr />

        <button onClick={resetCake}>
          🔄 Reset Cake
        </button>

      </div>

<div className="preview">
  <div className="cake-stack">

    {state.cake && (
      <img
        src={getCakeImage(state.cake)}
        alt={state.cake}
        className="layer cake"
      />
    )}

    {state.jam && (
      <img
        src={getJamImage(state.jam)}
        alt="jam"
        className="layer jam"
      />
    )}

    {state.frosting && (
      <img
        src={getFrostingImage(state.frosting)}
        alt="frosting"
        className="layer frosting"
      />
    )}

    {state.cherry && (
      <img
        src={getCherryImage(state.cherry)}
        alt="cherry"
        className="layer cherry"
      />
    )}

    {!state.cake && (
      <div className="empty-preview">
        Choose a cake to get started!
      </div>
    )}

  </div>
</div>

    </div>
  );
}
