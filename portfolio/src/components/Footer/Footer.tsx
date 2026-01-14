import styles from "./footer.module.css";
import logo from "../../assets/logo-white.png";
import gitLogo from "../../assets/git.png";
import linkedinLogo from "../../assets/linkedin.png";
import instagramLogo from "../../assets/instagram.png";
import emailLogo from "../../assets/email.png";
import phoneLogo from "../../assets/phone.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left section */}
        <div className={styles.brand}>
          <img src={logo} alt="Mariah Buhagiar logo" className={styles.logo} />
          <p className={styles.description}>
            Designing and developing thoughtful <br />
            digital experiences.
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn">
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className={styles.socialIcon}
              />
            </a>
            <a href="#" aria-label="GitHub">
              <img src={gitLogo} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src={instagramLogo}
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h4>Links</h4>
          <a href="/about">About me</a>
          <a href="/projects">My projects</a>
          <a href="/contact">Contact me</a>
        </div>

        {/* Contact */}
        <div className={styles.contactSection}>
          <h4>Contact</h4>

          <div className={styles.contactList}>
            <a
              href="mailto:buhagiarmariah05@gmail.com"
              className={styles.contactItem}
              aria-label="Email address"
            >
              <span className={styles.iconWrapper}>
                <img src={emailLogo} alt="" aria-hidden="true" />
              </span>
              buhagiarmariah05@gmail.com
            </a>

            <a
              href="tel:+35699335917"
              className={styles.contactItem}
              aria-label="Phone number"
            >
              <span className={styles.iconWrapper}>
                <img src={phoneLogo} alt="" aria-hidden="true" />
              </span>
              +356 99335917
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        © Mariah Buhagiar 2026 | All Rights Reserved
      </div>
    </footer>
  );
}
