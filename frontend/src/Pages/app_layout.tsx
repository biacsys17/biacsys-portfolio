import Wrapper from "../Components/Ui/styled.div";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  toggleTheme: () => void;
}

function AppLayout({ }: AppLayoutProps) {
  return (
    <Wrapper>
      <div className="overflow-hidden">

        {/* NAVBAR should be alone */}
        <div className="Nav-Bar ">
          <NavBar />
        </div>

        {/* ROUTED PAGE CONTENT */}
        <div className="main-layout">
          <Outlet />
        </div>

      </div>
    </Wrapper>
  );
}

export default AppLayout;
