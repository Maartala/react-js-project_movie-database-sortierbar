

const MovieItem = (props) => {
    // console.log(props);
    return (
        <article className="movie_item">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <div className="movie_item_genres">
                {props.genre.map((elt, i) => {
                    return (
                        <li key={i}>{elt}</li>
                    )
                })}
            </div>
        </article>
    );
}

export default MovieItem;
