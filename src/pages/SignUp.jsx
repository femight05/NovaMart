import { ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import sneakerImage from "../assets/products/sneaker 5.jpg";

const SignUp = () => {
  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-heading">
        <aside
          className="signup-showcase"
          style={{ "--signup-image": `url("${sneakerImage}")` }}
        >
          <a className="signup-brand" href="/" aria-label="NovaMart home">
            <span className="signup-brand-icon">
              <ShoppingBag aria-hidden="true" size={20} />
            </span>
            <span>NovaMart</span>
          </a>

          <div className="signup-showcase-copy">
            <span className="signup-eyebrow">
              <Sparkles aria-hidden="true" size={14} />
              YOUR STYLE, YOUR WAY
            </span>
            <h2>Good finds.<br />Great feeling.</h2>
            <p>
              Discover the pieces you love and make every day a little more
              you.
            </p>
          </div>

          <div className="signup-showcase-note">
            <span className="signup-note-icon">
              <ShieldCheck aria-hidden="true" size={18} />
            </span>
            <span>
              <strong>Shopping made simple</strong>
              <small>Your next favourite is just around the corner.</small>
            </span>
          </div>
        </aside>

        <div className="signup-form-panel">
          <div className="signup-form-heading">
            <span className="signup-form-kicker">GET STARTED FOR FREE</span>
            <h1 id="signup-heading">Create your account</h1>
            <p>Join NovaMart and find something you’ll love.</p>
          </div>

          <form className="signup-form" action="" method="post">
            <div className="signup-name-fields">
              <div className="signup-field">
                <label htmlFor="firstname">First name</label>
                <input
                  autoComplete="given-name"
                  id="firstname"
                  name="firstname"
                  placeholder="e.g. Alex"
                  required
                  type="text"
                />
              </div>
              <div className="signup-field">
                <label htmlFor="lastname">Last name</label>
                <input
                  autoComplete="family-name"
                  id="lastname"
                  name="lastname"
                  placeholder="e.g. Morgan"
                  required
                  type="text"
                />
              </div>
            </div>

            <div className="signup-field">
              <label htmlFor="email">Email address</label>
              <input
                autoComplete="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>

            <div className="signup-name-fields">
              <div className="signup-field">
                <label htmlFor="password">Password</label>
                <input
                  autoComplete="new-password"
                  id="password"
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  type="password"
                />
              </div>
              <div className="signup-field">
                <label htmlFor="cpassword">Confirm password</label>
                <input
                  autoComplete="new-password"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Re-enter password"
                  required
                  type="password"
                />
              </div>
            </div>

            <button className="signup-submit" type="submit">
              Create account
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </form>

          <div className="signup-login-prompt">
            <span>Already have an account?</span>
            <button type="button">Sign in</button>
          </div>
          <p className="signup-terms">
            By creating an account, you agree to our terms and privacy policy.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
