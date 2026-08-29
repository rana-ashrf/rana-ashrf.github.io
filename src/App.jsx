import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Qualification', href: '#qualification' },
  { label: 'Certificate', href: '#certificate' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Github', icon: 'Github', href: 'https://github.com/rana-ashrf' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/rana-fathima-k-p-61891536a' },
  { label: 'Resume', icon: 'Resume', href: '/images/ranafathimakp.pdf' },
]

const services = [
  {
    num: '01',
    title: 'Backend Development',
    desc: 'Building robust and scalable backend applications using Python and Django to power reliable APIs and business logic.',
  },
  {
    num: '02',
    title: 'API Development & Integration',
    desc: 'Designing and integrating RESTful APIs to connect applications and services securely and efficiently.',
  },
  {
    num: '03',
    title: 'Database Management',
    desc: 'Designing and managing structured databases using PostgreSQL for efficient, reliable, and scalable data storage.',
  },
  {
    num: '04',
    title: 'Web Application Development',
    desc: 'Developing responsive and user-friendly web applications using Python, Django, React, and modern web technologies.',
  },
]

const skills = [
  
  [
    { name: 'HTML5', icon: 'html', percent: 95 },
    { name: 'JavaScript', icon: 'js', percent: 88 },
    { name: 'React.js', icon: 'react', percent: 85 },
    { name: 'Tailwind CSS', icon: 'tailwind', percent: 90 },
  ],
  [
    { name: 'Python', icon: 'python', percent: 90 },
    { name: 'Django', icon: 'django', percent: 85 },
    { name: 'Django REST Framework', icon: 'drf', percent: 80 },
    { name: 'PostgreSQL / MySQL', icon: 'postgres', percent: 82 },
  ],
  [
    { name: 'Git', icon: 'git', percent: 85 },
    { name: 'GitHub', icon: 'github', percent: 90 },
    { name: 'Docker', icon: 'docker', percent: 75 },
  ],
]

const projects = [
  {
    num: '01',
    title: 'Fashion E-Commerce Website',
    desc: 'Developed a full-stack fashion e-commerce website using React.js, Django REST Framework, and PostgreSQL. Implemented JWT authentication, product browsing, cart, wishlist, orders, reviews, and Razorpay payment integration. Used Redis, Celery, and WebSockets for background tasks and real-time notifications. Containerized the application using Docker for deployment and scalability.',
    // Change this image path to update the project card image
    img: '/images/ecommerce.png',
  },
  {
    num: '02',
    title: 'Student Management System',
    desc: 'Developed a student management system using Python, Django, HTML, CSS, and PostgreSQL to manage student records efficiently. Implemented features for student registration, attendance, course management, and CRUD operations. Designed REST APIs for seamless data management and integrated authentication for secure access.',
    // Change this image path to update the project card image
    img: '/images/sms.png',
  },
]

function ArrowUpRight({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  )
}

function SocialIcon({ name }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
  }
  switch (name) {
    case 'dribbble':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case 'behance':
      return (
        <svg {...common}>
          <path d="M2 6h7a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2V6z" />
          <path d="M2 14h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2v-6z" />
          <path d="M15 15h7a3.5 3.5 0 0 0-7 0z" />
          <line x1="15" y1="11" x2="20" y2="11" />
        </svg>
      )
    default:
      return null
  }
}

function SkillIcon({ name }) {
  const p = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }
  switch (name) {
    case 'react':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5c-2.1 0-3.5-.6-4.2-1.1.8-1.4 2.6-2 4.2-2s3.4.6 4.2 1.1c-.7.5-2.1 1.1-4.2 1.1z" />
          <path d="M12 19c2.1 0 3.5.6 4.2 1.1-.8 1.4-2.6 2-4.2 2s-3.4-.6-4.2-1.1C8.5 19.6 9.9 19 12 19z" />
          <path d="M5 9.5C3.6 11.6 2.6 13.4 2.8 15c1.5.4 3.8-.2 5.4-2.2" />
          <path d="M19 9.5c1.4 2.1 2.4 3.9 2.2 5.5-1.5.4-3.8-.2-5.4-2.2" />
          <path d="M8.2 12.8C6.6 10.8 6 8.5 6.4 7c1.5-.4 3.8.2 5.4 2.2" />
          <path d="M15.8 12.8c1.6 2 2.2 4.3 1.8 5.8-1.5-.4-3.8-.2-5.4-2.2" />
        </svg>
      )
    case 'js':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V9l-2.5 4L4 9v8" />
          <path d="M14 8h3v8" />
          <path d="M14 12h3" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...p}>
          <path d="M12 4c-3 0-5 1.5-6 4.5 1.2-1.5 2.6-2.1 4.2-1.7.9.2 1.5.9 2.2 1.6 1.1 1.2 2.4 2.6 5.2 2.6 3 0 5-1.5 6-4.4-1.2 1.5-2.6 2-4.2 1.6-.9-.2-1.5-.9-2.2-1.6-1.1-1.2-2.4-2.6-5.2-2.6zM6 11.5C3 11.5 1 13 0 15.9c1.2-1.5 2.6-2 4.2-1.6.9.2 1.5.9 2.2 1.6 1.1 1.2 2.4 2.6 5.2 2.6 3 0 5-1.5 6-4.4-1.2 1.5-2.6 2-4.2 1.6-.9-.2-1.5-.9-2.2-1.6-1.1-1.2-2.4-2.6-5.2-2.6z" />
        </svg>
      )
    case 'bootstrap':
      return (
        <svg {...p}>
          <rect x="4" y="2" width="16" height="20" rx="3" />
          <path d="M9 17V7h3.5a2 2 0 0 1 0 4H9" />
          <path d="M9 17h4a2 2 0 0 0 0-4H9" />
        </svg>
      )
    case 'html':
      return (
        <svg {...p}>
          <path d="M4 3l1.5 15L12 20l6.5-2L20 3H4z" />
          <path d="M9 8h6M9 12h6M8.5 16h7" />
        </svg>
      )
    case 'css':
      return (
        <svg {...p}>
          <path d="M4 3l1.5 15L12 20l6.5-2L20 3H4z" />
          <path d="M8 8h8M9.5 12h5M9 16h2.5" />
        </svg>
      )
    case 'python':
      return (
        <svg {...p}>
          <path d="M12 3c-2 0-3 .4-3.4.9-.4.5-.5 1.4-.5 2.1H5.2c-.6 0-1.1.5-1 1.3.2 1.6.6 4.9 2.6 5.7.6.2 1.4 0 2.2 0V11h3.4v2h2.4c1.5 0 2-.7 2.4-1.8.5-1.4 1-4.3.6-5.7-.2-.9-1.5-1.5-2.6-1.5H12z" />
          <path d="M9 4.5c0-.4.5-.8 1.2-.8s1.2.4 1.2.8-.5.8-1.2.8S9 4.9 9 4.5z" />
          <path d="M12 21c2 0 3-.4 3.4-.9.4-.5.5-1.4.5-2.1h3.4c.6 0 1.1-.5 1-1.3-.2-1.5-.6-4.8-2.6-5.7-.6-.2-1.4 0-2.2 0V11h-3.4V9h-2.4c-1.5 0-2 .7-2.4 1.8-.5 1.4-1 4.3-.6 5.7.2.9 1.5 1.5 2.6 1.5H12z" />
          <path d="M15 19.5c0 .4-.5.8-1.2.8s-1.2-.4-1.2-.8.5-.8 1.2-.8 1.2.4 1.2.8z" />
        </svg>
      )
    case 'django':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5v-2M12 21v-2M5 12H3M21 12h-2M7.8 7.8L6.4 6.4M17.6 17.6l-1.4-1.4M7.8 16.2l-1.4 1.4M17.6 6.4l-1.4 1.4" />
        </svg>
      )
    case 'drf':
      return (
        <svg {...p}>
          <path d="M4 6h16M4 10h16M4 14h10" />
          <path d="M4 18h16" />
        </svg>
      )
    case 'postgres':
      return (
        <svg {...p}>
          <path d="M12 3c-2.5 0-4 1.2-4 3v4c0 1.8 1.5 3 4 3s4-1.2 4-3V6c0-1.8-1.5-3-4-3z" />
          <path d="M12 13v-1" />
        </svg>
      )
    case 'mysql':
      return (
        <svg {...p}>
          <path d="M4 7v10M20 7v10M8 7v10" />
          <path d="M4 7h4M20 7h-4" />
          <path d="M8 12h4M16 12h4" />
        </svg>
      )
    case 'database':
      return (
        <svg {...p}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      )
    case 'git':
      return (
        <svg {...p}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M8 6h8M8 6l2.5 9.5M16 6l-2.5 9.5" />
        </svg>
      )
    case 'github':
      return (
        <svg {...p}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.9 2.1 5.8 2.4 5.8 2.4A4.7 4.7 0 0 0 5.7 6 5 5 0 0 0 4.3 9.4c0 5 3 6.2 6 6.5a3.4 3.4 0 0 0-1 2.6V22" />
        </svg>
      )
    case 'docker':
      return (
        <svg {...p}>
          <path d="M4 13h16a8 8 0 0 1-8 8c-4.4 0-8-3.6-8-8z" />
          <path d="M4 10h.01M7 10h.01M10 10h.01M13 10h.01M16 10h.01M19 10h.01" />
          <path d="M14 10a2 2 0 0 0-2-2" />
        </svg>
      )
    default:
      return null
  }
}

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)

    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => observer.observe(el))

    const fills = document.querySelectorAll('.skill-fill')
    const fillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          const target = el.getAttribute('data-target')
          if (entry.isIntersecting) {
            el.style.width = target
          } else {
            el.style.width = '0%'
          }
        })
      },
      { threshold: 0.3 },
    )
    fills.forEach((el) => fillObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      fillObserver.disconnect()
    }
  }, [])

  const translate = Math.min(scrollY * 0.15, 80)

  return (
    <main className="page">
      <div className="card">
        <nav className="navbar">
          <div className="badge">
            <span className="badge-dot" />
            <span>Available for New Project</span>
          </div>

          <ul className="nav-links">
            {navLinks.map(({ label, href }) => (
              <li className="nav-link" key={label}>
                <a href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="pill-btn dark lets-talk">
            Let&apos;s Talk
            <ArrowUpRight />
          </a>
        </nav>

        <section className="hero">
          <div className="hero-word hero-word-stroke">RANA</div>
          <div className="hero-word">FATHIMA</div>

          <img
            src={heroImg}
            alt="Portrait"
            className="portrait"
            style={{ transform: `translateY(${translate}px)` }}
          />
        </section>

        <footer className="hero-footer">
          <div className="intro">
            <h2 className="intro-title">PYTHON DEVELOPER</h2>
            <p className="intro-sub">
              Building scalable, efficient, and reliable backend solutions that turn ideas into powerful digital experiences.
            </p>
            
          </div>

          <div className="socials">
            {socialLinks.map(({ label, icon, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                key={label}
              >
                <SocialIcon name={icon} />
                {label}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <section id="about" className="mx-auto my-[clamp(24px,4vw,56px)] w-full max-w-[1320px] rounded-[28px] bg-white px-6 py-20 shadow-[var(--card-shadow)] md:py-28">
        <div className="about-grid mx-auto max-w-5xl">
          <div className="about-photo reveal">
            <img src="/images/profile2.jpeg" alt="Portrait" className="about-img" />
          </div>

          <div className="about-content">
            <h2 className="about-title reveal">
              About Me
            </h2>
            <div className="about-body reveal">
              <p>
                I am a BCA graduate from Kannur University and an aspiring 
                Full Stack Developer with hands-on experience in Python, Django, React.js, PostgreSQL, and REST API development.
                 I completed a Python Full Stack internship at Bridgeon Skillversity, 
                where I gained practical experience in developing and integrating modern web applications.
              </p>
              <p>
                My key project is a Fashion E-Commerce Platform, a full-stack application built using React.js and 
                Django REST Framework, featuring user authentication, product management, cart and wishlist functionality, 
                order processing, payments, reviews, and an AI-powered chatbot using RAG and a vector database.
              </p>
              <p>
                In addition to application development, I have experience with Docker, Redis, Celery, Git/GitHub, 
                database management, and API integration. 
      
              </p>
              <p>
                I am passionate about building scalable, efficient, and user-focused applications, 
                continuously learning emerging technologies, and contributing to challenging real-world software projects.
              </p>
            </div>

            <div className="about-stats reveal">
            </div>

            {/* <a
              href="/images/ranafathimakp.pdf"
              download="rana_fathima_k_p.pdf"
              className="pill-btn dark lets-collab reveal"
            >
              Download CV
              <ArrowDown />
            </a> */}
          </div>
        </div>
      </section>

      <section id="service" className="mx-auto my-[clamp(24px,4vw,56px)] w-full max-w-[1320px] rounded-[28px] bg-white px-6 py-20 shadow-[var(--card-shadow)] md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="services-head reveal">
            <p className="about-label">• Services</p>
            <h2 className="services-title">
              What I can do
              <br />
              for you
            </h2>
          </div>

          <div className="services-grid">
            {services.map(({ num, title, desc }, i) => (
              <article
                className="service-card reveal"
                key={title}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="service-top">
                  <span className="service-num">{num}</span>
                  <ArrowUpRight />
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <p className="skills-subtitle">My Skills</p>
        <h2 className="skills-title">Technologies I Master</h2>
        <span className="skills-bar" />

        <div className="skills-grid">
          {skills.map((column, i) => (
            <div className="skills-column" key={i}>
              {column.map(({ name, icon, percent }) => (
                <div className="skill-item" key={name}>
                  <div className="skill-top">
                    <span className="skill-name">
                      <span className="skill-name-icon">
                        <SkillIcon name={icon} />
                      </span>
                      {name}
                    </span>
                    <span className="skill-percent">{percent}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      data-target={`${percent}%`}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto my-[clamp(24px,4vw,56px)] w-full max-w-[1320px] rounded-[28px] bg-white px-6 py-20 shadow-[var(--card-shadow)] md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center reveal">
            <p className="text-xs font-bold text-gray-400 tracking-wider mb-2">
              FEATURED PROJECTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Some of My Recent Work
            </h2>
            <span className="mt-4 inline-block h-0.5 w-14 rounded-full bg-slate-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map(({ num, title, desc, img }, i) => (
              <div className="reveal" key={num} style={{ transitionDelay: `${i * 0.15}s` }}>
                <article className="group h-full flex flex-col overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white">
                      {num}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900">
                        {title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-slate-500">
                        {desc}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex items-center justify-end gap-1 text-sm font-semibold text-indigo-600 group-hover:underline"
                    >
                      View Project <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="qualification" className="mx-auto my-[clamp(24px,4vw,56px)] w-full max-w-[1320px] rounded-[28px] bg-white px-6 py-20 shadow-[var(--card-shadow)] md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="reveal text-xs font-bold tracking-wider text-gray-400 mb-2">
            • QUALIFICATIONS
          </p>
          <h2 className="reveal mb-12 text-3xl font-bold text-slate-900 md:text-4xl">
            My Journey & Background
          </h2>
        </div>

        <div className="reveal mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex h-full flex-col">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
                🎓 Education
              </h3>

              <div className="flex flex-1 items-start gap-4 rounded-2xl border border-slate-100 bg-stone-50 p-6 transition-all hover:shadow-md">
                <img
                  src="/images/itm.png"
                  alt="ITM College Logo"
                  className="h-16 w-16 shrink-0 rounded-xl border border-slate-200 object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-slate-900">
                    BCA – Bachelor of Computer Applications
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    ITM College of Arts and Science
                  </p>
                  <p className="text-sm text-slate-500">Kannur University</p>
                  <span className="mt-3 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    2022 – 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
                💼 Internship
              </h3>

              <div className="flex flex-1 items-start gap-4 rounded-2xl border border-slate-100 bg-stone-50 p-6 transition-all hover:shadow-md">
                <img
                  src="/images/bridgeon.png"
                  alt="Bridgeon Logo"
                  className="h-16 w-16 shrink-0 rounded-xl border border-slate-200 object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-slate-900">
                    Python Developer Intern
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    Bridgeon Skillversity
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                    October 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificate" className="mx-auto my-[clamp(24px,4vw,56px)] w-full max-w-[1320px] rounded-[28px] bg-white px-6 py-20 shadow-[var(--card-shadow)] md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="reveal text-xs font-bold tracking-wider text-gray-400 mb-2">
            • CERTIFICATIONS
          </p>
          <h2 className="reveal mb-12 text-3xl font-bold text-slate-900 md:text-4xl">
            Certifications
          </h2>
        </div>

        <div className="reveal mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200/80 bg-stone-50 p-6 transition-all hover:shadow-md md:flex-row md:items-center md:p-8">
            <div>
              <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                🎓 Certified
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                AI-Data Architect
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-600">
                Issued to: Rana Fathima K P
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                Gained foundational knowledge in AI and data architecture, with a focus on designing and managing data-driven solutions.
              </p>
            </div>

            <a
              href="/images/Ranafathima.pdf"
              download="rana_fathima_k_p.pdf"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Certificate
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto my-[clamp(24px,4vw,56px)] w-full max-w-[1320px] rounded-[28px] bg-white px-6 py-20 shadow-[var(--card-shadow)] md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="reveal text-xs font-bold tracking-wider text-gray-400 mb-2">
            • CONTACT
          </p>
          <h2 className="reveal mb-12 text-3xl font-bold text-slate-900 md:text-4xl">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="reveal mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Got a project or job opportunity?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                I&apos;m currently available for freelance work, full-time roles, or
                collaborations. Feel free to reach out!
              </p>

              <div className="flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-slate-200 bg-stone-50 p-4 sm:flex-row sm:items-center">
                <span className="break-all text-sm font-semibold text-slate-900 md:text-base">
                  ranashraf9526@gmail.com
                </span>
                <a
                  href="mailto:ranashraf9526@gmail.com"
                  className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  Send Email
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <form
              action="mailto:ranashraf9526@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-200 bg-stone-50 p-3.5 text-sm outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-slate-200 bg-stone-50 p-3.5 text-sm outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-stone-50 p-3.5 text-sm outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-1 rounded-full bg-slate-900 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800"
              >
                Send Message
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
