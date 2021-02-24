'use strict';

import People from "./People.json";
import PeopleItem from "./PeopleItem";

const PeopleCom = () => {
    return (
        <ul>
            {
                People.map((person, i) => ( 
                    <PeopleItem 
                        key={i} 
                        name={person.name}
                        email={person.email}
                        link={person.website}
                    />
                ))
            }
        </ul>
    )
};

export default PeopleCom;