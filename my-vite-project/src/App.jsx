import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoriesBar from "./components/CategoriesBar";
import HomePage from "./pages/HomePage";
import MainTop from "./pages/MainTop";
import YazılımGeliştirme from "./pages/YazılımGeliştirme";
import LetsLearn from "./components/LetsLearn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/category/Yazılım Geliştirme'
          element={<YazılımGeliştirme />}
        />
      </Routes>
      <CategoriesBar />
      <MainTop />
      <LetsLearn />
    </Router>
  );
};

export default App;
