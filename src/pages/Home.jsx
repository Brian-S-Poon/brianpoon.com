export default function Home() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Brian Poon</h1>
      <p className="text-lg mb-6">Software Engineer. I build clean, functional web apps.</p>
      <div className="space-x-4">
        <a href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded">View Projects</a>
        <a href="/contact" className="px-4 py-2 border border-blue-600 text-blue-600 rounded">Contact Me</a>
      </div>
    </section>
  );
}
