import React, { useState } from "react";

function EditConversation({ id, body, onUpdateConversation }) {
    const [conversationBody, setConversationBody] = useState(body);

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:9292/conversations/${id}", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                body: conversationBody,
            }),
        })
            .then(response => response.json())
            .then((data) => onUpdateConversation(data));
    }

    return (
        <form className="edit-conversation" onSubmit={handleSubmit}>
            <input
                type="text"
                name="body"
                autocomplete="on"
                value={conversationBody}
                onChange={event => setConversationBody(event.target.value)}           
            />
            <input type="submit" value="save" />
        </form>
    );
}

export default EditConversation;