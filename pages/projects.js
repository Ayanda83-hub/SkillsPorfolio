import Layout from '../components/Layout'
const list=[
  {title:'Vault22 Business Case & Acquisition',link:'https://www.vault22.io/za'},
  {title:'Asia/Africa Incubator Campaign',link:'https://www.civilsocietyacademy.org/post/call-for-innovators-2019'},
  {title:'AgriTech Accelerator Program',link:'https://www.startupbootcamp.org/articles/startupbootcamp-launches-new-accelerator-focused-on-food-agritech-to-foster-sustainable-food-and-agriculture-innovations'},
  {title:'ILRI Publications',link:'https://www.ilri.org/news/breeding-genetic-solutions-strategy-how-livestock-genetics-innovation-achieves-ever-growing'},
  {title:'Tanit Sustainability Dashboard',link:'https://www.tanitsolutions.com'},
]
export default function Projects(){
  return (<Layout>
    <section className="container" style={{padding:'2rem 0'}}>
      <h1 style={{fontSize:'1.75rem',fontWeight:700,marginBottom:'1rem'}}>Projects</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'1rem'}}>
        {list.map(p=>(<div key={p.title} className="card">
          <div style={{fontWeight:600}}>{p.title}</div>
          <a href={p.link} target="_blank" rel="noreferrer" style={{display:'inline-block',marginTop:'.5rem'}}>Open ↗</a>
        </div>))}
      </div>
    </section>
  </Layout>)
}