import MoviesTable from './components/MoviesTable'
import Title from './components/Title'
import { useEffect, useState } from 'react'


function App() {
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    const title = "Marvel Cinematic Universe in Chronological Order";

    useEffect(() => {
        fetch("data/marvelMovies.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setMovies(result.marvelMovies);
                },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return (
            <div className="container">
                <Title text={title} />
                <div>Error loading: {error.message}</div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <Title text={title} />
                <br></br>
                <MoviesTable movies={movies} />
                <br></br>
            </div>
        );
    }
}

export default App;
