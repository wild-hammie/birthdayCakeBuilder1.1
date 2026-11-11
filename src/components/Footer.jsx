
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-note">
          <span className="footer-label">A LITTLE NOTE</span>
          <h2>Got a sweet idea?</h2>
          <p>
            Want a new cake flavor, frosting or something
            completely ridiculous? Tell me about it.
          </p>
        </div>

        <a
          className="footer-contact"
          href="https://t.me/ThisCouldBeNik"
          target="_blank"
          rel="noreferrer"
        >
          Send a suggestion
        </a>
      </div>

      <div className="footer-bottom">
        <span>Made for Sheida, with questionable artistic skills.</span>

        <div className="footer-socials">
          <a href="https://t.me/ThisCouldBeNik" target="_blank" rel="noreferrer">
            Contact
          </a>

          <a href="https://t.me/FluffyShitty" target="_blank" rel="noreferrer">
            Daily
          </a>

          <a href="https://t.me/wildhammie" target="_blank" rel="noreferrer">
            GitHub Updates
          </a>
        </div>
      </div>
    </footer>
  );
}
