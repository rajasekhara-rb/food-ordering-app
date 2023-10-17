import './App.css';
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import CreateRestaurant from './components/restaurant/CreateRestaurant.js';
import { OnlyAdminProtected, OnlyCustomerProtected } from '../src/components/Protect.js';
import { AuthContext, BaseURLContext, CustomerContext, RestaurantContext, UserContext } from './components/AuthContext';
import CreateFoodItems from './components/restaurant/CreateFoodItems';
import RestaurantRegistrationPage from './pages/restaurant/RestaurantRegistrationPage';
import FoodItemByIdPage from './pages/restaurant/FoodItemByIdPage';
import UpdateFoodItems from './components/restaurant/UpdateFoodItems';
import ReceivedOrdersPage from './pages/restaurant/ReceivedOrders';
import CustomerPage from './pages/customer/CustomerPage';
import MealsByIdPage from './pages/customer/MealsByIdPage';
import CustomerProfilePage from './pages/customer/CustomerProfilePage';
import ThankYouPage from './pages/customer/ThankYouPage';
import OrdersByIdPage from './pages/customer/OrdersByIdPage';
import UnauthorizedPage from './pages/UnauthorizedPage';

function App() {

  const baseUrl = "http://localhost:5050";

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("jwt"));
  // setIsLoggedIn(localStorage.getItem("user"));
  // console.log(isLoggedIn)
  const [restaurantDetails, setRestaurantDetails] = useState(JSON.parse(localStorage.getItem("restaurant_details")));
  // console.log(restaurantDetails)
  // const [customerDetails, setCustomerDetails] = useState(JSON.parse(localStorage.getItem("user")));
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <BaseURLContext.Provider value={baseUrl}>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <UserContext.Provider value={{ userDetails, setUserDetails }}>
            <RestaurantContext.Provider value={{ restaurantDetails, setRestaurantDetails }}>
              <Router>
                <div
                // style={{ position: "sticky", top: "0px" }}
                >
                  <Header />
                </div>
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
                    <Route path='restaurant' element={<RestaurantRegistrationPage />} />
                  </Route>

                  {/* <Route path="/register" element={<RegistrationPage />} /> */}
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path='/partnerwithus' element={<AddRestaurantPage />} />

                  {/* <CustomerContext.Provider value={{ customerDetails, setCustomerDetails }}> */}
                  <Route path="/customer" element={<OnlyCustomerProtected Component={CustomerPage} />}>
                    {/* <PrivateRoute path="" isAuthenticated={true} Component={CustomerDashboard}/> */}
                    <Route path='' element={<CustomerDashboard />} />
                    {/* <Route path="" element={<CustomerDashboard />} /> */}
                    <Route path="login" element={<LoginPage />} />
                    <Route path="profile" element={<CustomerProfilePage />} />
                    <Route path="fooditems" element={<FoodItemsPage />} />
                    <Route path='fooditems/:id' element={<MealsByIdPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckOutPage />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="orders/:id" element={<OrdersByIdPage />} />
                    <Route path='thankyou' element={<ThankYouPage />} />
                  </Route>
                  {/* </CustomerContext.Provider> */}

                  <Route path="/restaurant" element={<OnlyAdminProtected Component={RestaurantPage} />}>
                    <Route path='' element={<AdminDashboard />} />
                    <Route path="fooditems" element={<FoodItemsPage />} />
                    <Route path='fooditems/:id' element={<FoodItemByIdPage />} />
                    <Route path="create" element={<CreateRestaurant />} />
                    <Route path="addfooditems" element={<CreateFoodItems />} />
                    <Route path="updatefooditem/:id" element={<UpdateFoodItems />} />
                    <Route path='orders' element={<ReceivedOrdersPage />} />
                    <Route path="orders/:id" element={<OrdersByIdPage />} />
                  </Route>
                  <Route path="/unauthorized" element={<UnauthorizedPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Router>
              <div style={{ position: "relative", bottom: "0px" }}>
                <Footer />
              </div>
            </RestaurantContext.Provider>
          </UserContext.Provider>
        </AuthContext.Provider>
      </BaseURLContext.Provider>
    </>
  );
}

export default App;
