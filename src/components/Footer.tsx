import { FC, FormEvent } from 'react';

const Footer: FC = () => {
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Newsletter form submitted');
  };

  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-content-wrap row">
          {/* Company Description Block */}
          <div className="footer-company-description-block col-md-3">
            <div className="footer-about-content-wrapper">
              <a href="/" className="footer-logo d-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/676aa9bd495e6916741ac182_footer-logo.svg"
                  alt="Nutrizen Logo"
                  loading="lazy"
                />
              </a>
              <div className="text-lg">
                Empowering your health journey, our company provides science-backed nutrition.
              </div>
            </div>
          </div>

          {/* Contact Menu Block */}
          <div className="footer-contact-menu-block col-md-3">
            {/* Contact Us */}
            <div className="footer-menu-block">
              <div className="title-dark">
                <h5 className="h5">Contact us</h5>
              </div>
              <div className="footer-menu-two">
                <a href="tel:+234356435" className="footer-redirect-link d-inline-block">
                  <div className="text-lg">+23 4356 (435)</div>
                </a>
                <a href="mailto:office@nutrigen.com" className="footer-redirect-link d-inline-block">
                  <div className="text-lg">office@nutrigen.com</div>
                </a>
              </div>
            </div>
            {/* Visit Us */}
            <div className="footer-menu-block">
              <div className="title-dark">
                <h5 className="h5">Visit us</h5>
              </div>
              <div className="footer-menu-two">
                <a
                  href="https://maps.app.goo.gl/6agFt6y7NKV4ViKj9"
                  className="footer-redirect-link d-inline-block"
                >
                  <div className="text-lg">2345 Onk Drive, Pittsburgh, New York</div>
                </a>
              </div>
            </div>
          </div>

          {/* Company Menu Block */}
          <div className="footer-menu-block col-md-2">
            <div className="title-dark">
              <h5 className="h5">Company</h5>
            </div>
            <div className="footer-menu">
              <a href="/" className="footer-redirect-link d-inline-block">
                <div className="text-lg">Home</div>
              </a>
              <a href="/about" className="footer-redirect-link d-inline-block">
                <div className="text-lg">About Us</div>
              </a>
              <a href="/services" className="footer-redirect-link d-inline-block">
                <div className="text-lg">Services</div>
              </a>
              <a href="/contact" className="footer-redirect-link d-inline-block">
                <div className="text-lg">Blog</div>
              </a>
              <a href="/faq" className="footer-redirect-link d-inline-block">
                <div className="text-lg">FAQ</div>
              </a>
              <a href="/license" className="footer-redirect-link d-inline-block">
                <div className="text-lg">Licenses</div>
              </a>
            </div>
          </div>

          {/* Newsletter Block */}
          <div className="newsletter-block col-md-4">
            <div className="title-dark">
              <h5 className="h5">Newsletter</h5>
            </div>
            <div className="text-lg">
              Join our mailing list! Be the first to hear about new campaigns, fun quizzes, new blog posts,
            </div>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-text-field-wrap">
                <img
                  src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675a8b4d06908dfd29393f6e_mail-01.svg"
                  alt="Mail Icon"
                  className="newsletter-text-field-icon"
                  loading="lazy"
                />
                <input
                  type="email"
                  className="newsletter-text-field"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="submit-button-wrap">
                <button type="submit" className="submit-button">
                  <img
                    src="https://cdn.prod.website-files.com/675931be48143bd8073dddc4/675a8a927e0ef8e03fd27d5a_arrow-right-02-sharp.svg"
                    alt="Submit Icon"
                    className="submit-button-icon"
                    loading="lazy"
                  />
                </button>
              </div>
            </form>
            <div className="success-message" style={{ display: 'none' }}>
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message" style={{ display: 'none' }}>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>

        {/* Copyright Block */}
        <div className="footer-copyright-block row">
          <div className="footer-copyright-text-wrap col-md-6">
            <div className="text-default">
              © Copyright 2025, All Rights Reserved by{' '}
              <a href="https://www.uimile.com/" target="_blank" className="text-color-primary">
                UiMile
              </a>.
            </div>
            <div className="text-default">
              Powered By{' '}
              <a href="http://webflow.com" target="_blank" className="text-color-primary">
                Webflow
              </a>
            </div>
          </div>
          <div className="footer-copyright-link-wrapper col-md-6 text-md-end">
            <a href="/privacy-policy" className="footer-redirect-link d-inline-block">
              <div className="text-default">Privacy Policy</div>
            </a>
            <a href="/terms-and-conditions" className="footer-redirect-link d-inline-block">
              <div className="text-default">Terms & Conditions</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;