import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import CookingTipsPage from './pages/CookingTipsPage'
import AboutUsPage from './pages/AboutUsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div className="min-h-screen bg-background px-16 py-6">
      <Navbar />
      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/cooking-tips" element={<CookingTipsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <NewsletterSection />
      <Footer />
    </div>
  )
}
