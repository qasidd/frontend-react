'use strict';

import Footer from "./Footer";
import MyHeader from "./MyHeader";
import Navigation from "./Navigation"

const Standard = () => {

    return (
        <>
            <MyHeader />
            <Navigation />
            <main>
                <p>Something important</p>
            </main>
            <Footer />
        </>
    );
}

export default Standard;