import React, { useState } from "react";
import './style.scss'
import HomePage from "./pages/HomePage/HomePage";
import LoginSideBar from "./components/LoginComponents/LoginSideBar/LoginSideBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Forms from "./components/CRUD/Forms";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage/BlogDetailPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import LoginPage from './components/LoginComponents/LoginPage/LoginPage'
import RegisterPage from './components/LoginComponents/RegisterPage/RegisterPage'
import CheckOut from "./components/CheckOut/CheckOut";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MobileMenu from "./components/Responsive/MobileMenu/MobileMenu";
import MobileHeader from "./components/Responsive/MobileHeader/MobileHeader";
import MobibleFooter from "./components/Responsive/MobileFooter/MobileFooter";
const App = () => {
    const [loginModal, setLoginModal] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <>
            <BrowserRouter>

                <div >
                    <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />


                    <div id="page-container" className={loginModal || mobileMenu ? 'transition-whole-page-active' : undefined}>


                        <MobileHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
                        <Header loginModal={loginModal} setLoginModal={setLoginModal} />
                        <Routes>

                            <Route path="/" exact element={<HomePage />} />
                            <Route path="/blogs" exact element={<BlogPage />} />
                            <Route path="/blogs/:id" exact element={<BlogDetailPage />} />
                            <Route path='/blogs/search/:id' element={<BlogPage />} />
                            <Route path='/blogs/category/:id' element={<BlogPage />} />
                            <Route path='/create' element={<Forms />} />
                            <Route path='/homegarden' element={<ProductsPage />} />
                            <Route path='/megafashion' element={<ProductsPage />} />
                            <Route path='/brands' element={<ProductsPage />} />
                            <Route path='/:productId' element={<ProductDetailPage />} />
                            <Route path='/search/:searchQuery' element={<ProductsPage />} />
                            <Route path='/login' element={!user ? <LoginPage /> : <Navigate replace to='/' />} />
                            <Route path='/signup' element={!user ? <RegisterPage /> : <Navigate replace to='/' />} />
                            <Route path='/checkout' element={<CheckOut />} />
                            <Route path='*' element={<ErrorPage />} />
                        </Routes>

                        <MobibleFooter />
                        <Footer />


                    </div>
                    {loginModal && <LoginSideBar setLoginModal={setLoginModal} />}
                </div>
            </BrowserRouter>

        </>
    )
}
export default App;