
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
        Your cake starts here.
      </div>
    )}

  </div>
</div>
