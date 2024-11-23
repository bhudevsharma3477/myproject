import React from "react";
import LabelTag from "../components/label/LabelTag";

const Page3 = () => {
    return(
        <>
        <div className="form_3">
                <div className="container">
                    <form onSubmit={""}>
                        <LabelTag name="Loaded On" />
                        <LabelTag name="Description" />
                        <LabelTag name="Quantity" />
                        <LabelTag name="Weight" />
                        <LabelTag name="Marks and Numbers" />
                        <LabelTag name="Hazmat Code" />
                        <LabelTag name="Emergency Contact Name" />
                        <LabelTag name="Contact Number" />
                        <LabelTag name="Contact E-mail" />
                      
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page3;