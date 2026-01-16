import { useState, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  submitContactForm,
  resetStatus,
} from "../../features/contact/contactSlice";

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
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.contact);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(submitContactForm(formData));

    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      dispatch(resetStatus());
    }, 3000);
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
                <img src={email} alt="Email" />
              </div>
              <span className={styles.infoText}>
                buhagiarmariah05@gmail.com
              </span>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCircle}>
                <img src={phone} alt="Phone" />
              </div>
              <span className={styles.infoText}>+356 99332917</span>
            </div>
          </div>

          <div className={styles.socialsSection}>
            <p className={styles.socialsLabel}>Socials:</p>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/mariah-buhagiar-0a1a5a24b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <img src={linkedinLogo} alt="" />
              </a>

              <a
                href="https://github.com/mariahBuh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <img src={gitLogo} alt="" />
              </a>

              <a
                href="https://www.instagram.com/mariahbuhagiar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
              >
                <img src={instagramLogo} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.contactRight}>
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={styles.input}
                />
                {errors.fullName && (
                  <span className={styles.errorText}>{errors.fullName}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={styles.input}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className={styles.input}
                />
                {errors.subject && (
                  <span className={styles.errorText}>{errors.subject}</span>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={styles.textarea}
              />
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "loading"}
            >
              <span className={styles.submitBtnInner}>
                <span className={styles.submitText}>
                  {status === "loading" ? "Sending..." : "Send message"}
                </span>
                <span className={styles.submitArrow}>→</span>
              </span>
            </button>

            {status === "succeeded" && (
              <p role="status" className={styles.successMsg}>
                Message sent successfully ✓
              </p>
            )}

            {status === "failed" && (
              <p role="alert" className={styles.errorMsg}>
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
