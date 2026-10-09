import { useState } from 'react'

const movies = [
  {
    id: 1,
    title: 'Interstellar',
    genre: 'Sci-Fi / Adventure',
    duration: '2h 49min',
    image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: 2,
    title: 'Inception',
    genre: 'Sci-Fi / Thriller',
    duration: '2h 28min',
    image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    genre: 'Action / Crime',
    duration: '2h 32min',
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
]

function App() {
  const [search, setSearch] = useState('')

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#101014] text-white">

      {/* HEADER */}
      <header className="border-b border-gray-800 bg-[#17171d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <h1 className="text-3xl font-black tracking-wider text-red-500">
            BOOB<span className="text-white">LICKI</span>
          </h1>

          {/* Navigation */}
          <nav className="hidden gap-8 md:flex">
            <a href="/" className="hover:text-red-500">
              Home
            </a>

            <a href="#movies" className="hover:text-red-500">
              Movies
            </a>

            <a href="#movies" className="hover:text-red-500">
              Showtimes
            </a>
          </nav>

          {/* Login */}
          <button
            onClick={() => alert('Login page coming soon!')}
            className="rounded-lg bg-red-600 px-5 py-2 font-semibold hover:bg-red-700"
          >
            Sign In
          </button>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#242430] to-[#101014] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 font-semibold uppercase tracking-widest text-red-500">
            Welcome to BOOBLICKI
          </p>

          <h2 className="mb-5 text-5xl font-black md:text-7xl">
            EXPERIENCE <br />
            THE <span className="text-red-500">CINEMA</span>
          </h2>

          <p className="mb-8 max-w-xl text-lg text-gray-400">
            Discover amazing movies, explore showtimes and book your
            favorite seats for an unforgettable cinema experience.
          </p>

          <a
            href="#movies"
            className="inline-block rounded-lg bg-red-600 px-8 py-4 font-bold hover:bg-red-700"
          >
            Explore Movies →
          </a>

        </div>
      </section>

      {/* MOVIES SECTION */}
      <section
        id="movies"
        className="mx-auto max-w-7xl px-6 py-16"
      >

        {/* Title and Search */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5">

          <h2 className="text-3xl font-bold">
            Now <span className="text-red-500">Showing</span>
          </h2>

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-lg border border-gray-700 bg-[#202029] px-5 py-3 outline-none focus:border-red-500"
          />

        </div>

        {/* Movie Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filteredMovies.map(movie => (

            <div
              key={movie.id}
              className="overflow-hidden rounded-xl bg-[#1c1c24] transition-transform hover:-translate-y-2"
            >

              {/* Movie Poster */}
              <img
                src={movie.image}
                alt={movie.title}
                className="h-[430px] w-full object-cover"
              />

              {/* Movie Information */}
              <div className="p-6">

                <h3 className="mb-2 text-2xl font-bold">
                  {movie.title}
                </h3>

                <p className="mb-2 text-gray-400">
                  {movie.genre}
                </p>

                <p className="mb-6 text-sm text-gray-500">
                  {movie.duration}
                </p>

                {/* Booking Button */}
                <button
                  onClick={() =>
                    alert(`Booking for ${movie.title} coming soon!`)
                  }
                  className="w-full rounded-lg bg-red-600 py-3 font-semibold hover:bg-red-700"
                >
                  Book Tickets
                </button>

              </div>
            </div>

          ))}

        </div>

        {/* No Results */}
        {filteredMovies.length === 0 && (
          <p className="mt-10 text-center text-gray-400">
            No movies found.
          </p>
        )}

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-[#17171d] px-6 py-8 text-center text-gray-500">
        © 2026 BOOBLICKI. All rights reserved.
      </footer>

    </div>
  )
}

export default App