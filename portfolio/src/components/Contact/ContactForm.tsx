import { useState, type ChangeEvent } from "react";
import styles from "./contact.module.css";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import gitLogo from "../../assets/git.png";
import linkedinLogo from "../../assets/linkedin.png";
import instagramLogo from "../../assets/instagram.png";

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* LEFT */}
        <div className={styles.contactLeft}>
          <h2 className={styles.title}>Contact me</h2>
          <h1 className={styles.mainTitle}>Get In Touch</h1>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.iconCircle}>
                {" "}
                <img src={email} alt="Email" />
              </div>
              <span className={styles.infoText}>
                buhagiarmariah05@gmail.com
              </span>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}>
                {" "}
                <img src={phone} alt="Phone" />
              </div>
              <span className={styles.infoText}>+356 99332917</span>
            </div>
          </div>

          <div className={styles.socialsSection}>
            <p className={styles.socialsLabel}>Socials:</p>
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
        </div>

        {/* RIGHT */}
        <div className={styles.contactRight}>
          <div className={styles.contactForm}>
            <div className={styles.formRow}>
              <input
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => setFocusedField("fullName")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${
                  focusedField === "fullName" ? styles.focused : ""
                }`}
              />

              <input
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                onFocus={() => setFocusedField("phoneNumber")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${
                  focusedField === "phoneNumber" ? styles.focused : ""
                }`}
              />
            </div>

            <div className={styles.formRow}>
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${
                  focusedField === "email" ? styles.focused : ""
                }`}
              />

              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={`${styles.input} ${
                  focusedField === "subject" ? styles.focused : ""
                }`}
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className={`${styles.textarea} ${
                focusedField === "message" ? styles.focused : ""
              }`}
            />

            <button className={styles.submitButton} /*onClick={handleSubmit}*/>
              <span className={styles.submitBtnInner}>
                <span className={styles.submitText}>Send message</span>
                <span className={styles.submitArrow}>→</span>
              </span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
