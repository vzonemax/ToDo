import './styles/App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;