export default function Projects() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Split It</h3>
          <p>Group expense splitter app built with React, Tailwind, and Supabase.</p>
        </li>
        <li className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">ProxiPal</h3>
          <p>Location-sharing app for friends and events.</p>
        </li>
      </ul>
    </section>
  );
}
