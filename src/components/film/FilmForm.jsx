'use strict';

const FilmForm = ({ handleQuery, handleSubmit }) => {

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Movie title"
                    onChange={handleQuery} />
                <button type="submit" className="ml-2 btn btn-primary"> Search </button>
            </form>
        </div>
    );
};

export default FilmForm;