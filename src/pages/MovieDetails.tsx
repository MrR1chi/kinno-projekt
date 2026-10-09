import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { movies } from '../data/movies'

function MovieDetails() {
    const { id } = useParams()
    const movie = movies.find(movie => movie.id === Number(id))

    const [selectedDate, setSelectDate] = useState(
        movie?.sessions[0]?.date ?? ''
    )

    if (!movie) {
        return (
            <div className="mx-auto max-w-6xl px-6 py-20">
                <h1 className="mb-6 text-3xl font-bold">Movie not found</h1>
                <Link to='/' className="text-red-500">
                    ← Back to movies
                </Link>
            </div>
        )
    }

    const selectedSessions = movie.sessions.find(
        session => session.date === selectedDate
    )

    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
            <Link to="/" className="mb-8 inLine.block text-gray-400 hover:text-white">
                ← Back to movies 
            </Link>

            <div className="grid gap-10 md:grid-cols-[320px_1fr]">
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full rounded-xl"
                />

                <div>
                    <h1 className="mb-4 text-4xl font-black md:text-5xl">{movie.title}</h1>

                    <div className="mb-6 flex flex-wrap gap-3 text-sm">
                        <span className="rounded bg-gray-800 px-3 py-2">{movie.genre}</span>
                        
                        <span className="rounded bg-gray-800 px-3 py-2">{movie.duration}</span>

                        <span className="rounded bg-gray-800 px-3 py-2">{movie.ageRating}</span>

                        <span className="rounded bg-gray-800 px-3 py-2">{movie.year}</span>
                    </div>

                    <h2 className="mb-3 text-2xl font-bold">Synopsis</h2>

                    <p className="mb-8 max-w-2xl  leading-7 text-gray-400">{movie.description}</p>

                    <a 
                        href={movie.trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-red-600 px-6 py-3 font-bold hover:bg-red-700">
                            ▶ Watch Trailer
                        </a>
                </div>
            </div>

            <section className="mt-16">
                <h2 className="mb-6 text-2xl font-bold">
                    Movie <span className="text-red-500">Showtimes</span>
                </h2>
            
            <div className="mb-6 flex flex-wrap gap-3">{movie.sessions.map(session => (
                <button
                    key={session.date}
                    onClick={() => setSelectDate(session.date)}
                    className={`rounded-lg px-6 py-3 font-semibold transition ${
                        selectedDate === session.date
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-300 hover:bg-gray-700'
                    }`}
                >
                    {new Date(`${session.date}T12:00:00`).toLocaleDateString(
                        'en-GB',
                        {
                            day: 'numeric',
                            month: 'short',
                            weekday: 'short',
                        }
                    )}
                </button>
            ))}
        </div>

        <div className="rounded-lg bg-[#1c1c24] p-6">
            <h3 className="mb-5 text-xl font-semibold">Avalible Sessions</h3>

            <div className= "flex flex-wrap gap-4">
                {selectedSessions?.times.map(time => (
                    <Link
                        key={time}
                        to={`/booking/${movie.id}?date=${selectedDate}&time=${time}`}
                        className="rounded-lg border border-gray-700 bg-[#292933] px-8 py-4 font-bold transition hover:border-red-500 hover:bg-red-600"
                        >
                        {time}
                        </Link>
                ))}
            </div>
                    </div>
                    </section>
        </main>
    )
}

export default MovieDetails