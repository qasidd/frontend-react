'use strict';

import { useState } from 'react';
import List from './List';
import SearchBar from './SearchBar';
import Todo from './Todo.json';

const SearchableList = () => {

    const [query, setQuery] = useState('');
    const [check, setChcek] = useState(false);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    const handleCheck = () => {
        setChcek(c => !c);
    }

    return (
        <>
            <SearchBar 
                stateQuery={query} 
                updateQuery={handleQuery}
                stateCheck={check} 
                updateCheck={handleCheck}
             />
            <List list={Todo} check={check} query={query} />
        </>
    );
};

export default SearchableList;