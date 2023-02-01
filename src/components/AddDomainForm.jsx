import React, {useState} from "react";
import {connect} from "react-redux";

function AddDomainForm({addDomain}) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addDomain(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input
                    name="text"
                    value={text}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add domain</button>
            </p>
        </form>
    );
}

const enhance = connect(
    null,
    dispatch => ({
        addDomain: (domain) => dispatch({type: "ADD_DOMAIN", payload: domain})
    })
);

export default enhance(AddDomainForm);
