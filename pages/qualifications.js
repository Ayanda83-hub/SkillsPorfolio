import Layout from '../components/Layout'
const items=[
  {title:'Academic Record (Post Graduate)', file:'/docs/Academic_Record_Post_Graduate.pdf'},
  {title:'Diploma - Data Science', file:'/docs/Diploma_Data_Science.pdf'},
  {title:'Certificate of Completion - Data Science', file:'/docs/Certificate_Data_Science.pdf'},
]
export default function Qualifications(){
  return (<Layout>
    <section className="container" style={{padding:'2rem 0'}}>
      <h1 style={{fontSize:'1.75rem',fontWeight:700,marginBottom:'1rem'}}>Qualifications</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'1rem'}}>
        {items.map(q=>(<div key={q.title} className="card">
          <div style={{fontWeight:600}}>{q.title}</div>
          <div style={{display:'flex',gap:'.5rem',marginTop:'.75rem'}}>
            <a className="btn" href={q.file} target="_blank" rel="noreferrer">View</a>
            <a className="btn-ghost" href={q.file} download>Download</a>
          </div>
        </div>))}
      </div>
      <p style={{marginTop:'1rem',color:'#6b7280',fontSize:'.9rem'}}>Place the PDFs in <code>/public/docs</code> before deploying.</p>
    </section>
  </Layout>)
}