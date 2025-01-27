import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoriesBar from "./components/CategoriesBar";
import HomePage from "./pages/HomePage";
import MainTop from "./pages/MainTop";
import YazılımGeliştirme from "./pages/YazılımGeliştirme";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use Routes instead of Switch in v6 */}
        <Route path='/' element={<HomePage />} />
        <Route
          path='/category/Yazılım Geliştirme'
          element={<YazılımGeliştirme />}
        />
      </Routes>{" "}
      <CategoriesBar /> {/* Place this here if you want it on all pages */}
      <MainTop /> {/* Place this here if you want it on all pages */}
    </Router>
  );
};

export default App;
