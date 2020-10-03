import React from "react";

import Carousel from "../carousell/carousel";
import GetInTouch from "./getInTouch";
import Form from "./form";
import Questions from "./questions";
import Newsletter from "../newslettter/newsletter";

const Contact = () => {
    return (
        <>
            <Carousel />
            <GetInTouch />
            <Form />
            <Questions />
            <Newsletter />
        </>
    )
};

export default Contact;
