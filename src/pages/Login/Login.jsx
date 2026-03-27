import useLogin from '../../hooks/useLogin';
import styles from './Login.module.css';

function Login() {
  const {
    username,
    password,
    showPassword,
    isLoading,
    error,
    handleUsernameChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleLoginSubmit,
  } = useLogin();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Hello again! Log in to continue</p>
        </div>

        <form onSubmit={handleLoginSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.inputGroup}>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className={styles.input}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.eyeButton}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'LOG IN'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
