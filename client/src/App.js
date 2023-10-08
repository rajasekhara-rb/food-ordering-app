import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Footer from './components/Footer.js';
import LandingPage from './pages/LandingPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import AdminDashboard from "./pages/restaurant/AdminDashboard.js";
import CustomerDashboard from './pages/customer/CustomerDashboard.js';
import CartPage from './pages/customer/CartPage.js';
import CheckOutPage from './pages/customer/CheckOutPage.js';
import OrdersPage from './pages/customer/OrdersPage.js';
import FoodItemsPage from './pages/restaurant/FoodItemsPage.js';
import ContactPage from './pages/ContactPage.js';
import AddRestaurantPage from './pages/restaurant/AddRestaurantPage.js';
import RestaurantPage from './pages/restaurant/RestaurantPage.js';
import LoginPage from './pages/LoginPage.js';
import CustomerLoginPage from './pages/customer/CustomerLoginPage.js';
import RestaurantLoginPage from './pages/restaurant/RestuarantLoginPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
import CustomerRegistrationPage from './pages/customer/CustomerRegistrationPage.js';
import CreateRestaurant from './pages/restaurant/CreateRestaurantPage.js';
import Protect from '../src/components/Protect.js';

function App() {

  return (
    <>

      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />}>
            <Route path='' element={<CustomerLoginPage />} />
            <Route path='customer' element={<CustomerLoginPage />} />
            <Route path='restaurant' element={<RestaurantLoginPage />} />
          </Route>

          <Route path="/register" element={<RegistrationPage />}>
            <Route path='' element={<CustomerRegistrationPage />} />
            <Route path='customer' element={<CustomerRegistrationPage />} />
            <Route path='restaurant' element={<CreateRestaurant />} />
          </Route>

          {/* <Route path="/register" element={<RegistrationPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/partnerwithus' element={<AddRestaurantPage />} />

          {/* <Route path="/customer" element={<CustomerDashboard />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="fooditems" element={<FoodItemsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route> */}

          <Route path="/restaurant" element={<RestaurantPage />}>
            <Route path='' element={<AdminDashboard />} />
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