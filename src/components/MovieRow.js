const MovieRow = ({ movie }) => {
    return (
        <tr>
            <td>{movie.name}</td>
            <td className="symbol">{movie.seen ? <span>&#10004;</span> : null}</td>
        </tr>
    )
}

export default MovieRow
