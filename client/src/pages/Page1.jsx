import React from "react";
import SelectTag from "../components/SelectTag";

const Page1 = () => {

    return (
        <>
            <div className="form_1">
                <div className="container">
                    <form onSubmit={""}>
                        <SelectTag />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page1;