import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import loginStyle from "../styles/login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function login() {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/admindashboard");
      }
      setLoading(false);
    });
  }, []);

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlelogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        router.push("/admindashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        setTimeout(() => setError(false), 3000);
      });
  };
  if (loading) {
    return <div className={loginStyle.pending}> Pending...</div>;
  } else
    return (
      <div className={loginStyle.mycontainer}>
        <div className={loginStyle.screen}>
          <div className={loginStyle.screen__content}>
            <form className={loginStyle.login} onSubmit={handlelogin}>
              <div className={loginStyle.login__field}>
                <i
                  className={`${loginStyle.login__icon} ${loginStyle.fas} ${loginStyle.fa_user}`}
                ></i>
                <input
                  type="text"
                  className={loginStyle.login__input}
                  placeholder="User name / Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={loginStyle.login__field}>
                <i
                  className={`${loginStyle.login__icon} ${loginStyle.fas} ${loginStyle.fa_lock}`}
                ></i>
                <input
                  type="password"
                  className={loginStyle.login__input}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <span className={loginStyle.error}>
                    wrong password or email !
                  </span>
                )}
              </div>
              <button
                className={`${loginStyle.button} ${loginStyle.login__submit}`}
              >
                <span className={loginStyle.button__text}>Log In Now</span>
                <i
                  className={`${loginStyle.button__icon} ${loginStyle.fas} ${loginStyle.fa_chevron_right}`}
                ></i>
              </button>
            </form>
          </div>
          <div className={loginStyle.screen__background}>
            <span
              className={`${loginStyle.screen__background__shape} ${loginStyle.screen__background__shape4}`}
            ></span>
            <span
              className={`${loginStyle.screen__background__shape} ${loginStyle.screen__background__shape3}`}
            ></span>
            <span
              className={`${loginStyle.screen__background__shape} ${loginStyle.screen__background__shape2}`}
            ></span>
            <span
              className={`${loginStyle.screen__background__shape} ${loginStyle.screen__background__shape1}`}
            ></span>
          </div>
        </div>
      </div>
    );
}

export default login;
