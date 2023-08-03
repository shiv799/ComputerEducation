import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./utils/Loader";
import AdminNewDashboard from "./Components/Layout/AdminNewDashboard";
const AdminProtected = React.lazy(() =>
  import("./Components/Protected/AdminProtected")
);
const Layout = React.lazy(() => import("./Components/Layout/Layout"));
const Home = React.lazy(() => import("./Components/Pages/Home"));
const PageNotFound = React.lazy(() => import("./utils/PageNotFound"));
const Login = React.lazy(() => import("./Components/Auth/Login"));
const AdminDashboard = React.lazy(() =>
  import("./Components/Layout/AdminDashboard")
);

function App() {
  return (
    <BrowserRouter>
      <ToastContainer transition={Zoom} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/*" element={<PageNotFound />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin-dashboard" element={<AdminNewDashboard />} />
          <Route element={<AdminProtected />}>
            <Route exact path="/dashboard" element={<AdminDashboard />} />
          </Route>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
