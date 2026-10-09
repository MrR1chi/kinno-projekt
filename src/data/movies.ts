export type Movie = {
    id: number
    title: string
    genre: string
    duration: string
    year: number
    ageRating: string
    description: string
    image: string
    trailer: string
    sessions: {
        date: string
        times: string[]
    }[]
}

export const movies: Movie[] = [
    {
        id: 1,
        title: 'Interstellar',
        genre: 'Sci-Fi / Adventure',
        duration: '2h 49min',
        year: 2014,
        ageRating: '12+',
        description:'A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.',
        image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
        sessions: [
            { date: '2026-10-10', times: ['14:00', '17:30', '21:00'] },
            { date: '2026-10-11', times: ['12:00', '16:00', '20:30'] },

        ],
    },
    {
        id: 2,
        title: 'The Dark knight',
        genre: 'Action / Crime',
        duration: '2h 32min',
        year: 2008,
        ageRating: '12+',
        description:'Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.',
        image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
        sessions: [
            { date: '2026-10-10', times: ['16:00', '20:00'] },
            { date: '2026-10-11', times: ['14:00', '19:30'] },

        ],
    },
    {
        id: 3,
        title: 'Inception',
        genre: 'Sci-Fi / Thriller',
        duration: '2h 28min',
        year: 2010,
        ageRating: '12+',
        description:'A skilled thief enters the dreams of others to steal secrets and is offered a chance to erase his criminal history.',
        image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
        trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
        sessions: [
            { date: '2026-10-10', times: ['13:00', '18:00'] },
            { date: '2026-10-11', times: ['15:30', '20:00'] },

        ],
    },

]