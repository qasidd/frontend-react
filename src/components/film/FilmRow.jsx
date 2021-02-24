'use strict';

const FilmRow = ({ film }) => {
    return (
        <div className="card">
            <img src={film.Poster} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{film.Title}</h5>
                <p className="card-text">Year: {film.Year}</p>
            </div>
        </div>
    );
}

export default FilmRow;