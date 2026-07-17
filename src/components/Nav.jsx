import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/category/hr', label: 'Categories' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <Link to="/" className="logo">
          <div className="logo-dot" />
          <span>AI Prompting Playbook</span>
        </Link>
        <nav>
          {links.map(l => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/category/hr" className="btn btn-primary">Browse All</Link>
      </div>
    </header>
  )
}
