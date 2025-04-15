import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GameDetail from './pages/GameDetail'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface-900 text-white">
        <Header />
        <main className="container mx-auto px-4 pt-20 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:gameId" element={<GameDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App