import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import "./components/style/Base.css";
import "./components/style/Responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router';
import Menu from './components/Pages/Menu/Menu';
import Team from './components/Pages/Team/Team';
import PageNotFound from './components/Pages/404-Page/PageNottFound';
import Blog from './components/Pages/Blog/Blog';
import BlogDetails from './components/Pages/Blog/BlogDetails/BlogDetails';
import Register from './components/Forms/Register/Register';
import Cart from './components/Pages/Cart/Cart';
import MenuDetail from './components/Pages/Menu/MenuDetail/MenuDetail';
import Login from './components/Forms/Login/Login';
import AuthProvider from './components/context/Auth/AuthProvider';
import ProtectedRoute from './components/Route/Protected-Route/ProtectedRoute';
import Checkout from './components/Forms/Checkout/Checkout';
import ScrollToTop from './components/UI/Scroll-Top/ScrollToTop';
import ThankYou from './components/Pages/Thank You/ThankYou';

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <main className="main-section dark:bg-slate-700">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Route>
            <Route path='/thank-you' element={<ThankYou />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
