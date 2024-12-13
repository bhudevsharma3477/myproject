const styles = {
    // ----------------------------SELECT COMPONENT CSS STYLES---------------------------- //
    // ----------------------------SELECT COMPONENT CSS STYLES---------------------------- //
    select: {
        width: "100%",

        "& .MuiOutlinedInput-input": {
            // border: "1px solid rgba(4, 158, 56)",
            // padding: "3px 0px 3px 10px",
            // backgroundColor: "rgba(4, 158, 56, 0.1)",
            // borderRadius: "3px",
            // fontFamily: "Inter",

        },

        ".MuiSelect-icon": {
            //  color: "rgba(4, 158, 56)",
        },
    },

    menuitem: {

    },

    // ----------------------------FILE PICKER COMPONENT CSS STYLES---------------------------- //
    // ----------------------------FILE PICKER COMPONENT CSS STYLES---------------------------- //
    file_picker: {
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1
    },

    // ----------------------------SEARCH BAR COMPONENT CSS STYLES---------------------------- //
    // ----------------------------SEARCH BAR COMPONENT CSS STYLES---------------------------- //
    search_bar: {
        //border: "1px solid red",
        width: "100%",

        textfield: {
            //border: "1px solid green"
        }
    },

    // ----------------------------LABEL COMPONENT CSS STYLES---------------------------- //
    // ----------------------------LABEL COMPONENT CSS STYLES---------------------------- //
    label: {
        // color: "#006653",
        color: "black",
        fontWeight: "500",
        fontFamily: "Inter",

        '& .MuiInputLabel-asterisk': {
            //   color: '#006653'
            color: "red"
        },
    },

    // ----------------------------TEXTFIELD COMPONENT CSS STYLES---------------------------- //
    // ----------------------------TEXTFIELD COMPONENT CSS STYLES---------------------------- //
    textfield: {
        width: "100%"
    },

    // ----------------------------ICON COMPONENT CSS STYLES---------------------------- //
    // ----------------------------ICON COMPONENT CSS STYLES---------------------------- //
    icons: {
        backgroundColor: "green"
    }
};

export default styles;