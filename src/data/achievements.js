// Icon keys map to lucide-react components in AchievementCard.jsx.
// Add a new object here to add a new milestone — no component changes needed.
import googleCloudCert from '../assets/achievements/google-cloud-generative-ai-leader.jpeg'

export const ACHIEVEMENTS = [
  {
    id: 1,
    icon: 'trophy',
    title: 'Smart India Hackathon 2025',
    badge: 'National Winner',
    subtitle: null,
    description:
      '1st Place with Team Graviton (PS-SIH25263), building a solution for a Government of India problem statement.',
  },
  {
    id: 2,
    icon: 'badge-check',
    title: 'Microsoft Certified',
    badge: null,
    subtitle: 'Power Platform Fundamentals (PL-900)',
    description:
      'Completed Power Platform Fundamentals training covering Power Apps, Power Automate, Dataverse, Power Pages, Copilot Studio, and AI Builder',
    buttonLabel: 'Verify Credential',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/Gayatrinawale-1418/24D904E202F2B0DF?sharingId=B0DB964B07C77C76',
  },
  {
    id: 3,
    icon: 'cloud',
    title: 'Oracle Cloud Infrastructure',
    badge: null,
    subtitle: '2025 Certified AI Foundations Associate',
    description:
      'Certified in AI fundamentals, OCI services and cloud-based ML solutions.',
    buttonLabel: 'Verify Credential',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F3CB07A9659D8305C86D5E859543AB115B78BE965BBB19A5EE4A13277BBAB429',
  },
  {
    id: 4,
    icon: 'sparkles',
    title: 'Google Cloud',
    badge: null,
    subtitle: 'Generative AI Leader Track',
    description:
      'Covers foundation models, prompt engineering and responsible AI practices.',
    buttonLabel: 'View Certificate',
    image: googleCloudCert,
  },
  {
    id: 5,
    icon: 'file-text',
    title: 'Research Publication',
    badge: null,
    subtitle: 'IJIRMPS',
    description:
      'Research on AI-driven crop yield estimation using machine learning.',
    buttonLabel: 'Read Publication',
    link: 'https://www.ijirmps.org/research-paper.php?id=232843',
  },
]
