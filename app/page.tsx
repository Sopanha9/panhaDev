export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">Panha</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-500">Panha</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="max-w-3xl mx-auto text-lg text-foreground/80 space-y-4">
            <p>
              I&apos;m a passionate developer with a love for creating beautiful and functional web applications.
              I enjoy working with modern technologies and always strive to write clean, efficient code.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source,
              or working on personal projects that challenge my skills and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js',
              'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Git',
              'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-foreground/5 rounded-lg p-6 text-center hover:bg-foreground/10 transition-colors"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Portfolio Website',
                description: 'A modern portfolio built with Next.js and Tailwind CSS',
                tech: 'Next.js, TypeScript, Tailwind'
              },
              {
                title: 'E-commerce Platform',
                description: 'Full-stack e-commerce solution with payment integration',
                tech: 'React, Node.js, MongoDB'
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task manager with real-time updates',
                tech: 'React, Firebase, Material-UI'
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <p className="text-sm text-blue-500">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Get In Touch</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-foreground/5 rounded-lg p-8 text-center">
              <p className="text-lg mb-6 text-foreground/80">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@example.com"
                  className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Email
                </a>
                <div className="flex justify-center space-x-6 mt-6">
                  <a href="#" className="text-foreground/70 hover:text-blue-500 transition-colors">GitHub</a>
                  <a href="#" className="text-foreground/70 hover:text-blue-500 transition-colors">LinkedIn</a>
                  <a href="#" className="text-foreground/70 hover:text-blue-500 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Panha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
