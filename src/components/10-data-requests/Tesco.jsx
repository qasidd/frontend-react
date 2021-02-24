'use strict';

import { useEffect, useState } from "react";
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Employee from "./Employee";

const Tesco = () => {

    // error
    const [error, setError] = useState(null);
    // loading
    const [isLoaded, setLoaded] = useState(false);
    // data
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // get some data for me
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then((value) => {
                    setLoaded(true);
                    setData(value.data.data);
                }).catch((err) => {
                    setLoaded(true);
                    setError(err);
                })
        }, 1000)
    }, [])

    if (error) {
        return <p>Oops... something went wrong!</p>
    } else if (!isLoaded) {
        return (
            <>
                <p>Please wait... we are loading your information</p>
                <Spinner animations="border">
                    <span>Loading....</span>
                </Spinner>
            </>
        )
    }

    return (
        // <ul>
        //     {data.map((e) => (
        //         <li>{e.employee_name}</li>
        //     ))}
        // </ul>
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </thead>
            <tbody>
                {data.map((person) => (
                    <tr><Employee person={person} /></tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tesco;