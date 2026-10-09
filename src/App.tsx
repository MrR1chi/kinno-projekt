import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams, useSearchParams } from 'react-router-dom'
import { movies } from './data/movies'
import MovieDetails from './pages/MovieDetails'

function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#17171d]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="text-2xl font-black tracking-wider text-red-500 md:text-3xl">
          BOOB<span className="text-white">LICKI</span>
        </Link>

        <nav className="flex gap-5">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>

          <Link to="/#movies" className="hover:text-red-500">
            Movies
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Home() {
  const [search, setSearch] = useState('')

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <section className="bg-gradient-to-r from-[#242430] to-[#101014] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-red-500">
            Welcome to BOOBLICKI
          </p>

          <h1 className="mb-5 text-5xl font-black md:text-7xl">
            EXPERIENCE <br />
            THE <span className="text-red-500">CINEMA</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-400">
            Discover amazing movies, explore showtimes and book
            your favorite seats.
          </p>

          <a
            href="#movies"
            className="inline-block rounded-lg bg-red-600 px-8 py-4 font-bold hover:bg-red-700"
          >
            Explore Movies →
          </a>
        </div>
      </section>

      <section id="movies" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-3xl font-bold">
            Now <span className="text-red-500">Showing</span>
          </h2>

          <input
            type="search"
            placeholder="Search movies..."
            value={search}
            onChange={event => setSearch(event.target.value)}
            className="rounded-lg border border-gray-700 bg-[#202029] px-5 py-3 outline-none focus:border-red-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map(movie => (
            <article
              key={movie.id}
              className="overflow-hidden rounded-xl bg-[#1c1c24] transition-transform hover:-translate-y-2"
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-[430px] w-full object-cover"
                />
              </Link>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">
                  {movie.title}
                </h3>

                <p className="mb-2 text-gray-400">{movie.genre}</p>
                <p className="mb-6 text-sm text-gray-500">
                  {movie.duration}
                </p>

                <Link
                  to={`/movie/${movie.id}`}
                  className="block rounded-lg bg-red-600 py-3 text-center font-semibold hover:bg-red-700"
                >
                  View Showtimes
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="mt-10 text-center text-gray-400">
            No movies found.
          </p>
        )}
      </section>
    </>
  )
}

function BookingPlaceholder() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const movie = movies.find(movie => movie.id === Number(id))
  const date = params.get('date')
  const time = params.get('time')

  const validSession = movie?.sessions.some(
    session => session.date === date && session.times.includes(time ?? '')
  )

  if (!movie || !validSession) {
    return <p className="p-10">Session not found.</p>
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-5 text-4xl font-bold">Seat Selection</h1>
      <p className="text-gray-400">
        {movie.title} — {date} at {time}
      </p>
      <p className="mt-6">
        Interactive seat selection will be added in the next step.
      </p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#101014] text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/booking/:id" element={<BookingPlaceholder />} />
          <Route path="*" element={<p className="p-10">Page not found.</p>} />
        </Routes>

        <footer className="border-t border-gray-800 bg-[#17171d] px-6 py-8 text-center text-gray-500">
          © 2026 BOOBLICKI. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App