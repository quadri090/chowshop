import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './Pages/Home.jsx'
import Vendors from './Pages/Vendors.jsx'
import Cart from './Pages/Cart.jsx'
import Verification from './Pages/Verification.jsx'
import OrderStatus from './Pages/OrderStatus.jsx'
import HomeContextProvider from './context/HomeContext'

function App() {

  return (
    <div>
    <HomeContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/verification" element={<Verification/>} />
          <Route path="/OrderStatus" element={<OrderStatus/>} />
          <Route path="/Vendors" element={<Vendors/>} />
        </Routes>
      </Router>
    </HomeContextProvider>
    </div>
  )
}

export default App
