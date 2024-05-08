import { Global } from "@emotion/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Cars from "./pages/cars/ui/Cars";
import { GLOBAL_STYLES } from "./styles/global.styles";
import "./styles.scss";
import { Header } from "./components/header/Header";

const App: FC = () => {
  return (
    <div className="appWrapper">
      <Header />
      <Outlet />
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
