
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-14 pb-48 flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
