import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import FetchUsers from "./pages/FetchUsers"
import AxiosUsers from "./pages/AxiosUsers"
import ReactQueryUsers from "./pages/ReactQueryUsers"
import AddUser from "./pages/AddUser"
import UserDetails from "./pages/UserDetails"

function App() {

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/fetch-users" element={<FetchUsers />} />
          <Route path="/axios-users" element={<AxiosUsers />} />
          <Route path="/query-users" element={<ReactQueryUsers />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
