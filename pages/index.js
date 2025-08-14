import Layout from '../components/Layout'
export default function Home(){
  return (<Layout>
    <section className="container" style={{padding:'2rem 0'}}>
      <div className="card">
        <h1 style={{fontSize:'2rem',fontWeight:800}}>Ayanda Ntombela</h1>
        <p style={{marginTop:'.5rem',color:'#475569'}}>Business Analyst & Innovation Strategist — sustainability, fintech, development.</p>
        <div style={{marginTop:'1rem',display:'flex',gap:'.5rem'}}>
          <a className="btn" href="/cv-ayanda.pdf" download>Download CV</a>
          <a className="btn-ghost" href="/projects">View Projects</a>
        </div>
      </div>
    </section>
  </Layout>)
}