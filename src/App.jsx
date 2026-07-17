import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import PromptDetail from './pages/PromptDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:catId" element={<Category />} />
      <Route path="/prompt/:promptId" element={<PromptDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
