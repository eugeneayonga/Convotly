import React, { useState } from "react";

function NewConversation({ presentUser, onAddConversation}) {
    const [body, setBody] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:9292/conversations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                body: body,
                user_id: presentUser.id // username: presentUser.username
            }),
        })
        .then(response => response.json())
        .then(data => {
            onAddConversation(data);
            setBody("");
        });
    }

    return (
        <form className="new-conversation" onSubmit={handleSubmit}>
            <input
                type="text"
                name="body"
                autocomplete="on"
                value={body}
                onChange={event => setBody(event.target.value)}
            />
            <button type="submit">Send Convo</button>
        </form>
    );
}

export default NewConversation;