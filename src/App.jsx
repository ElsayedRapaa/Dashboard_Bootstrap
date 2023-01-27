import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import NavbarCom from "./components/Navbar";
import Aside from "./components/Aside";
import { useEffect, useState } from "react";
import DashboardContent from "./components/DashboardContent";
import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Badges from "./components/Badges";
import Buttons from "./components/Buttons";
import Grid from "./components/Grid";
import Cards from "./components/Cards";

function App() {
  const [showSide, setShowSide] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 991) {
      setShowSide(true);
    } else {
      setShowSide(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.onresize]);

  return (
    <div className="d-flex">
      {showSide && <Aside />}
      <div className="d-flex flex-grow-1 flex-column">
        <NavbarCom />
        {/* <DashboardContent /> */}
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/grid" element={<Grid />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
