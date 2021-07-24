const Title = ({ text }) => {
    const link = "https://www.digitalspy.com/movies/a825774/marvel-cinematic-universe-in-chronological-order/";

    return (
        <div>
            <h1>{text}</h1>
            <h5>List of movies from <a href={link}>{link}</a></h5>
        </div>
    )
}

export default Title
