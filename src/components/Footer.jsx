import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="pagefoot">
      <div className="container pagefoot-inner">
        <span>&copy; 2026 AI Prompting Playbook &middot; Built for Enterprise Creators</span>
        <div className="pagefoot-links">
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
