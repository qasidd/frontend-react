'use strict';

import ArrayItem from "./ArrayItem";

const ComponentWithProps = (props) => {

    const { numberProp, strProp, funcProp, objProp, fruitsProp } = props;

    const objectPropsDisplay = [];

    for (let [k, v] of Object.entries(objProp)) {
        if (v instanceof Array) {
            let c = 0;
            for (let e of v) {
                objectPropsDisplay.push(<li key={c}>Value: {e}</li>);
                c++;
            }
        } else {
            objectPropsDisplay.push(<li key={k}>Value: {v}</li>);
        }
    }

    return (
        <>
            <p>Number prop : {numberProp}</p>
            <p>String prop : {strProp}</p>
            <p>Func prop : {funcProp()}</p>
            {/* <ArrayItem fruitsProp={fruitsProp} /> */}
            <ul>
                {
                    fruitsProp.map((item, i) => (
                        <ArrayItem key={i} item={item} />
                    ))
                }
            </ul>
            <ul>{objectPropsDisplay}</ul>
        </>
    );
}

export default ComponentWithProps;