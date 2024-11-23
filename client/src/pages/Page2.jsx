import React from "react";
import LabelTag from "../components/label/LabelTag";
import FilePicker from "../components/file picker/FilePicker";

const Page2 = () => {
    return(
        <>
        <div className="form_2">
                <div className="container">
                    <form onSubmit={""}>
                        <LabelTag required={true} name="Shipment Type" />
                        <LabelTag required={true} name="Shipment Control Number" />
                        <LabelTag required={true} name="Province of Loading" />
                        <LabelTag name="Attached to Trip Number" />
                        <LabelTag required={true} name="Shipper" />
                        <LabelTag required={true} name="Consignee" />
                        <LabelTag name="Broker" />
                        <LabelTag name="Upload Documentation" />
                        <FilePicker />
                        <LabelTag required={true} name="Is Fax Service Billable" />
                        
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page2;