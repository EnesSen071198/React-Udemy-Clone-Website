import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoriesBar from "./components/CategoriesBar";
import HomePage from "./pages/HomePage";
import MainTop from "./pages/MainTop";
import YazılımGeliştirme from "./pages/YazılımGeliştirme";
import LetsLearn from "./components/LetsLearn";
import AiLearn from "./components/AiLearn";
import CourseDetail from "./components/CourseDetail"; // Kurs detayları sayfası

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ana Sayfa ve diğer sayfalara rota */}
        <Route path='/' element={<HomePage />} />
        <Route
          path='/category/Yazılım Geliştirme'
          element={<YazılımGeliştirme />}
        />

        {/* CourseDetail sayfası yalnızca kendi başına açılacak */}
        <Route path='/course/:id' element={<CourseDetail />} />
      </Routes>

      {/* Bu bileşenler yalnızca ana sayfada veya ilgili sayfada görünecek */}
      <CategoriesBar />
      <MainTop />
      <LetsLearn />
      <AiLearn />
    </Router>
  );
};

export default App;
