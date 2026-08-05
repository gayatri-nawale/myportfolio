import { Globe, Database, Workflow, Cpu } from 'lucide-react'
import meetSyncImg from '../assets/projects/meetsyncimg.png'
import moneymanger from '../assets/projects/moneymanger.jpeg'
import whatsappchatanalyzer from '../assets/projects/whatsappchatanalyzer.jpeg'
import leavemanagement from '../assets/projects/leavemanagement.png'
import projectmanagement from '../assets/projects/projectmanagement.png'
import trackmycoin from '../assets/projects/cryptocoin.png'

// Cycled across cards in order so a new project just needs to be appended below —
// the gradient and stagger position are derived automatically.
const GRADIENTS = [
  'linear-gradient(135deg, #ECFDF5 0%, #A7F3D0 100%)', // mint-green
  'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)', // peach
  'linear-gradient(135deg, #F5F3FF 0%, #DDD6FE 100%)', // lavender
  'linear-gradient(135deg, #F0F9FF 0%, #BAE6FD 100%)', // sky-blue
  'linear-gradient(135deg, #FEFCE8 0%, #FDE68A 100%)', // warm-yellow
  'linear-gradient(135deg, #F4F4F0 0%, #C9D2BE 100%)', // sage
]

const RAW_PROJECTS = [
 {
  id: 1,
  title: 'MeetSync AI',
  category: 'Web App',
  icon: Cpu,
  description:
    'An AI-powered application that transforms meeting transcripts into clear and professional Minutes of Meeting, including key discussions, decisions, and action items.',
  tech: [
    'Java',
    'Spring Boot',
    'React',
    'PostgreSQL'
  ],
  image: meetSyncImg,
  github: 'https://github.com/gayatri-nawale/meet-sync',

},
  {
  id: 2,
  title: 'WhatsApp Chat Analyzer',
  category: 'Data Analytics',
  icon: Globe,
  image: whatsappchatanalyzer,
  description:
    'A chat analysis application that converts WhatsApp chat exports into meaningful insights with message statistics, activity trends, emoji analysis, and interactive visualizations.',
  tech: [
    'Python',
    'Streamlit',
    'Pandas',
    'Matplotlib'
  ],
  github: 'https://github.com/gayatri-nawale/whatsapp-chat-analyzer',

},
{
  id: 3,
  title: 'Money Manager',
  category: 'Web App',
  icon: Globe,
  image: moneymanger,
  description:
    'A personal finance application that helps users track income and expenses, manage monthly budgets, and monitor spending through an interactive dashboard.',
  tech: [
    'Java',
    'Spring Boot',
    'React',
    'MySQL'
  ],
  github: 'https://github.com/gayatri-nawale/money-manager'
},

{
  id: 4,
  title: 'Leave Management System',
  category: 'Business Application',
  icon: Workflow,
  image: leavemanagement,
  description:
    'A leave management application that simplifies leave requests, automates approval workflows, tracks leave history, and sends email notifications for employees and managers.',
  tech: [
    'Power Apps',
    'Power Automate',
    'SharePoint',
    'Outlook'
  ],

  live: 'https://www.youtube.com/watch?v=Ks6bQfELUI0&t=7s',
},
 {
  id: 5,
  title: 'Project Management System',
  category: 'Business Application',
  icon: Workflow,
  image: projectmanagement,
  description:
    'A project management application that helps teams manage projects, assign tasks, track progress, monitor priorities and deadlines, and automate team notifications.',
  tech: [
    'Power Apps',
    'Power Automate',
    'SharePoint',
    'Microsoft Teams'
  ],

  live: 'https://www.youtube.com/watch?v=RNV0Vaoow84&t=85s',
},
 {
  id: 6,
  title: 'TrackMyCoin',
  category: 'Web App',
  icon: Globe,
  image: trackmycoin,
  description:
    'A cryptocurrency tracking application that displays real-time prices, market trends, market capitalization, and 24-hour performance with a fast and responsive interface.',
  tech: [
    'React',
    'CoinStats API'
  ],
  github: 'https://github.com/gayatri-nawale/TrackMyCoin',

}
]

// '#' placeholders count as "no link" — cards should only show an icon when
// there's a real URL behind it.
const realLink = (url) => (url && url !== '#' ? url : null)

export const PROJECTS = RAW_PROJECTS.map((project, i) => ({
  ...project,
  github: realLink(project.github),
  live: realLink(project.live),
  gradient: GRADIENTS[i % GRADIENTS.length],
}))
