import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import "./CharacterArc.css";

const CharacterArc = () => {
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsRotated(true);
            } else {
                setIsRotated(false);
            }
        };

        window.addEventListener("resize", handleResize);

        // Call handleResize once to set initial state
        handleResize();

        // Remove event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div>CharacterArc</div>
            <Col
                style={{ height: "700px" }}
                className={isRotated ? "rotate-90" : ""}
            >
                <div
                    style={{
                        width: "100%",
                        borderBottom: `1px dashed black`,
                        margin: "10px 0",
                    }}
                ></div>
                <div className="circle-center">Hello I am A Circle</div>
                <div className="circle-1">Hello I am A Circle</div>
                <div className="circle-2">Hello I am A Circle</div>
                <div className="circle-3">Hello I am A Circle</div>
                <div className="circle-4">Hello I am A Circle</div>
                <div className="circle-5">Hello I am A Circle</div>
                <div className="circle-6">Hello I am A Circle</div>
                <div className="circle-7">Hello I am A Circle</div>
                <div className="circle-8">Hello I am A Circle</div>
                <div className="circle-9">Hello I am A Circle</div>
                <div className="circle-10">Hello I am A Circle</div>
                <div className="circle-11">Hello I am A Circle</div>
                <div className="circle-12">Hello I am A Circle</div>
                <div className="circle-13">Hello I am A Circle</div>
            </Col>
        </>
    );
};

export default CharacterArc;
