import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from './pages/CustomerDashboard';
import RegistrationPage from './pages/RegistrationPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import OrdersPage from './pages/OrdersPage';
import FoodItemsPage from './pages/FoodItemsPage';
import ContactPage from './pages/ContactPage';
import AddRestaurantPage from './pages/AddRestaurantPage';



function App() {

  return (
    <>

      <Header />
      {/* <LandingPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path='/partner-with-us' element={<AddRestaurantPage />} />

          <Route path="/customer" element={<CustomerDashboard />}>
            <Route path="fooditems" element={<FoodItemsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="orders" element={<OrdersPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Route>


          <Route path="/restaurant" element={<AdminDashboard />}>
            <Route path="register" element={<LoginPage />} />
            <Route path="fooditems" element={<FoodItemsPage />} />
            {/* <Route path="create" element={<CreateRestaurant />} /> */}
            <Route path="addfooditem" element={<FoodItemsPage />} />
            <Route path="updatefooditem" element={<FoodItemsPage />} />
          </Route>


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
