import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
