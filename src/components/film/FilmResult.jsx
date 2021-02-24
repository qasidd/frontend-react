'use strict';

import FilmRow from "./FilmRow";

const FilmResult = ({ data }) => {

    return (
        <div className="row mt-3">
            {data.map((film) => (
                <div className="col-md-3">
                    <FilmRow key={film.imdbID} film={film} />
                </div>
            ))}
        </div>
    )
}

export default FilmResult;