import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <div className="bg-canvas text-ink min-h-screen">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}
