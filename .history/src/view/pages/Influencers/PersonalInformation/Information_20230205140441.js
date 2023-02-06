import React from "react";

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
