import Layout from '../components/Layout'
export default function Contact(){
  return (<Layout>
    <section className="container" style={{padding:'2rem 0'}}>
      <h1 style={{fontSize:'1.75rem',fontWeight:700}}>Contact</h1>
      <p>Email: <a href="mailto:ayanda.ntombela@posteo.net">ayanda.ntombela@posteo.net</a></p>
      <p>LinkedIn: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayanda-ntombela-2210108/">Profile</a></p>
    </section>
  </Layout>)
}