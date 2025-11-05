export default function Header() {
  return (
    <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-extrabold">Terry's Hub</h1>
        <p className="text-sm text-gray-500">Social media, design & content services</p>
      </div>
      <nav className="space-x-4">
        <a href="#services" className="text-sm hover:underline">Services</a>
        <a href="#work" className="text-sm hover:underline">Work</a>
        <a href="#contact" className="text-sm hover:underline">Contact</a>
      </nav>
    </header>
  )
}
