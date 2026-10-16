import { ArrowRight, LockKeyhole, ShoppingBag, Sparkles } from "lucide-react";
import sneakerImage from "../assets/products/sneaker 5.jpg";

const SignIn = () => {
  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signin-heading">
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
              WELCOME BACK
            </span>
            <h2>
              Fresh looks.
              <br />
              Faster checkout.
            </h2>
            <p>
              Jump back in and pick up where you left off with your favorite
              essentials.
            </p>
          </div>

          <div className="signup-showcase-note">
            <span className="signup-note-icon">
              <LockKeyhole aria-hidden="true" size={18} />
            </span>
            <span>
              <strong>Secure access</strong>
              <small>Your account stays protected with every order.</small>
            </span>
          </div>
        </aside>

        <div className="signup-form-panel">
          <div className="signup-form-heading">
            <span className="signup-form-kicker">SIGN IN</span>
            <h1 id="signin-heading">Welcome back</h1>
            <p>Sign in to your NovaMart account and keep shopping.</p>
          </div>

          <form className="signup-form" action="" method="get">
            <div className="signup-field">
              <label htmlFor="email">Email address</label>
              <input
                autoComplete="email"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
                required
                type="email"
              />
            </div>

            <div className="signup-field">
              <label htmlFor="password">Password</label>
              <input
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                type="password"
              />
            </div>

            <button className="signup-submit" type="submit">
              Sign in
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </form>

          <div className="signup-login-prompt">
            <span>New to NovaMart?</span>
            <button type="button">Create account</button>
          </div>
          <p className="signup-terms">
            Need help accessing your account? Contact our support team.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
