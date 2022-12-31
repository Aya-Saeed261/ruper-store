// Imported components
import SectionHeader from "./global/sectionHeader";

const ForgotPassword = () => {
  return (
    <section className="forgot-password pb-3">
      <SectionHeader page="forgot password" pageLink="forgot-password" />
      <div className="container-fluid py-5 px-xl-4">
        <p className="gray-text mt-3">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="email" className="gray-text mb-2">
              Username or email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="email-input d-block main-border py-1 px-2 "
            />
          </div>
          <input
            type="submit"
            value="Reset password"
            className="submit-btn border border-2 border-dark d-inline-block bg-black text-white rounded-0 px-5 py-2"
            aria-label="Reset password"
          />
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
