'use strict';

import { useState } from "react";
import axios from 'axios';
import FilmForm from "./FilmForm";
import FilmResult from "./FilmResult";

const FilmMain = () => {

    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const handleQuery = ({ target }) => {
        setQuery(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query == "") {
            console.log(`Trying to search an empty query!`)
        } else {
            axios.get(`http://www.omdbapi.com/?apikey=346ea054&i&s=${query}`)
                .then((value) => {
                    console.log(value.data);
                    setData(value.data.Search);
                }).catch((err) => {
                    setError(err);
                    console.log(error);
                })
        }
    }

    return (
        <>
            <FilmForm handleQuery={handleQuery} handleSubmit={handleSubmit} />
            {error ?
                (<p>Error!</p>) :
                (<FilmResult data={data} />)
            }
        </>
    )
};

export default FilmMain;