import React from "react";
import CardLeft from "../Blog/CardLeft";
import Banner from "../../Components/Banner/Banner";

export default function IndexDetail() {
    return (
        <>
            <Banner name={"DetailBlog"}></Banner>
            <div className="page-section pt-5">
                <div className="container">
                    <div className="row">
                        <Detail></Detail>
                    </div>
                </div>
            </div>
        </>
    );
}
