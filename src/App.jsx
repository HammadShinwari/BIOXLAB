import React from "react"
import './App.css'
import Banner from "./components/Banner"
import HomeDemos from "./components/HomeDemos"
import Features from "./components/Features"
import Feedback from "./components/Feedback"
import Purchase from "./components/Purchase"

function App() {
  return (
    <>
      <Banner />
      <HomeDemos />
      <Features />
      <Feedback />
      <Purchase />
    </>
  )
}

export default App