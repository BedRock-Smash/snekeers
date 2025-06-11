import "./style/global.css"
import "./style/repeat.css"



import { BrowserRouter as Router, Routes, Route } from "react-router"
import { Home, Cart, ProductPage, Favorite, Profill } from "./pages"
import { Header } from "./components/header"

import { Suspense } from "react"
import { Basket } from "./components"




function App() {

  return (
    <>
      <Router>
      <Header />
      <Suspense fallback={<h1>...Loading</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not found Page 404</h1>} />
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/profill" element={<Profill />} />




        </Routes>
      </Suspense>
      <Basket/>
    </Router>
    
    </>
    
  )
}

export default App
