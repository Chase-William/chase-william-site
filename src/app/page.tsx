import Navigation from '@/components/navigation'
import Education from '@/components/portfolio/education'
import Experience from '@/components/portfolio/experience'
import Frameworks from '@/components/portfolio/frameworks'
import Projects from '@/components/portfolio/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-center p-24">

      <Experience />
      <div style={{ height: '70px' }}></div>

      <Education/>

      <div style={{ height: '70px' }}></div>
      
      <Frameworks />

      <div style={{ height: '70px' }}></div>

      <Projects />

      <div style={{ height: '70px' }}></div>

    </main>
  )
}
