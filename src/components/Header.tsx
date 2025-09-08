export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-xl border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="font-sans tracking-wider">
              <span style={{ color: '#4285F4' }}>W</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>r</span>
              <span style={{ color: '#34A853' }}>k</span>
            </span>
            <span className="font-mono text-white"> Journal</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
