import MoviesTable from './components/MoviesTable'
import Title from './components/Title'
import { useEffect, useState } from 'react'
import './App.css'


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
                <div className="left"></div>
                <div className="center">
                    <div className="header">
                        <Title text={title} />
                    </div>
                    <div className="body">
                        <div>Error loading: {error.message}</div>
                    </div>
                    <div className="footer"></div>
                </div>
                <div className="right"></div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="left"></div>
                <div className="center">
                    <div className="header">
                        <Title text={title} />
                    </div>
                    <div className="body">
                        <MoviesTable movies={movies} />
                    </div>
                    <div className="footer"></div>
                </div>
                <div className="right"></div>
            </div>
        );
    }
}

export default App;
