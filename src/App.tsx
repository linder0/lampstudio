import { Routes, Route } from 'react-router-dom'
import { LampProvider } from './context/LampContext'
import Layout from './components/Layout'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import Thesis from './pages/Thesis'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <LampProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </LampProvider>
  )
}

export default App
