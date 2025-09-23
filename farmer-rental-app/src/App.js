import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RentEquipment from "./pages/RentEquipment"; 
import AddEquipment from "./pages/AddEquipment";
import EquipmentList from "./pages/EquipmentList";
import Profile from "./pages/Profile";
import Bookings from "./pages/Bookings";
import OwnerRequests from "./pages/OwnerRequests";
import MyBookings from "./pages/MyBookings";
import CropRecommendation from "./pages/CropRecommendation";
import FertilizerPrediction from "./pages/FertilizerPrediction";
import CropYieldEstimation from "./pages/CropYieldEstimation";
import SoilAnalysis from "./pages/SoilAnalysis";
import PlantDiseaseDetection from "./pages/PlantDiseaseDetection";
import ManageMyEquipment from "./pages/ManageMyEquipment";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/rent-equipment" element={<RentEquipment />} />
        <Route path="/add-equipment" element={<AddEquipment />} />
        <Route path="/manage-my-equipment" element={<ManageMyEquipment />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner-requests" element={<OwnerRequests />} />
        <Route path="/equipment-list" element={<EquipmentList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />

        {/* ML Features */}
        <Route path="/ml/crop-recommendation" element={<CropRecommendation />} />
        <Route path="/ml/fertilizer-prediction" element={<FertilizerPrediction />} />
        <Route path="/ml/crop-yield-estimation" element={<CropYieldEstimation />} />
        <Route path="/ml/soil-analysis" element={<SoilAnalysis />} />
        <Route path="/ml/plant-disease" element={<PlantDiseaseDetection />} />
      </Routes>
    </Router>
  );
}

export default App;
