import Layout from '../components/Layout'
const items=[
  {title:'Personality Assessment - Feb 2024', file:'/docs/Personality_Assessment_02_2024.pdf'},
  {title:'Personality Assessment - Jan 2024', file:'/docs/Personality_Assessment_01_2024.pdf'},
]
export default function Personality(){
  return (<Layout>
    <section className="container" style={{padding:'2rem 0'}}>
      <h1 style={{fontSize:'1.75rem',fontWeight:700,marginBottom:'1rem'}}>Personality Assessments</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'1rem'}}>
        {items.map(a=>(<div key={a.title} className="card">
          <div style={{fontWeight:600}}>{a.title}</div>
          <div style={{display:'flex',gap:'.5rem',marginTop:'.75rem'}}>
            <a className="btn" href={a.file} target="_blank" rel="noreferrer">View</a>
            <a className="btn-ghost" href={a.file} download>Download</a>
          </div>
        </div>))}
      </div>
      <p style={{marginTop:'1rem',color:'#6b7280',fontSize:'.9rem'}}>Place the PDFs in <code>/public/docs</code> before deploying.</p>
    </section>
  </Layout>)
}