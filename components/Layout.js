import Link from 'next/link'
export default function Layout({children}){
  return (<div>
    <header style={{position:'sticky',top:0,backdropFilter:'blur(6px)',background:'rgba(255,255,255,.8)',borderBottom:'1px solid #e5e7eb',zIndex:40}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.75rem 0'}}>
        <Link href="/" style={{fontWeight:700}}>Ayanda Ntombela</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/qualifications">Qualifications</Link>
          <Link href="/personality">Personality</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
    <main>{children}</main>
    <footer style={{borderTop:'1px solid #e5e7eb',marginTop:'2rem'}}>
      <div className="container" style={{padding:'1rem 0',fontSize:'.9rem',color:'#6b7280',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8}}>
        <div>© {new Date().getFullYear()} Ayanda Ntombela</div>
        <div className="nav">
          <a href="mailto:ayanda.ntombela@posteo.net">Email</a>
          <a href="tel:+4915738948062">Phone</a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayanda-ntombela-2210108/">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>)
}