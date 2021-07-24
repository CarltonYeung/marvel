import MovieRow from './MovieRow'
import PropTypes from 'prop-types'
import './MoviesTable.css'


const MoviesTable = ({ movies }) => {
    return (
        <table id="moviesTable">
            <thead>
                <tr>
                    <th>Movie/Show</th>
                    <th>Seen it</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, index) => <MovieRow key={index} movie={movie} />)
                }
            </tbody>
        </table>
    )
}

MoviesTable.defaultProps = {
    movies: [
        {
            name: "Captain America: The First Avenger",
            seen: true
        }
    ]
}

MoviesTable.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MoviesTable
