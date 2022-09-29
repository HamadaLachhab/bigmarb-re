import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
function Layout({ children }: any) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default Layout;
