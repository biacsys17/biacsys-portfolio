import Wrapper from "../Components/Ui/styled.div";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  toggleTheme: () => void;
}

function AppLayout({}: AppLayoutProps) {
  return (
    <Wrapper>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}

export default AppLayout;
