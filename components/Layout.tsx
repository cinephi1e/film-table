import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: `calc(100vh - 180px)` }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
