import React, { useState } from "react";
import EditConversation from "./EditConversation";

function Conversation({ conversation, presentUser, onConversationDelete, onUpdateConversation }) {
    const [isEditing, setIsEditing] = useState(false);

    const { id, body, author, user_id, created_at: createdAt } = conversation;

    const timestamp = new Date(createdAt).toLocaleTimeString();

    const isPresentUser = presentUser.id === user_id;


    function handleDeleteClick() {
        fetch(`http://localhost:9292/conversations/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            onConversationDelete(id);
        }
        );
    }

    function handleUpdateConversation(updatedConversation) {
        setIsEditing(false);
        onUpdateConversation(updatedConversation);
    }

    return (
        <li>
            <span className="author">{author}</span>
            <span className="timestamp">{timestamp}</span>
            {isEditing ? (
                <EditConversation
                    conversation={conversation}
                    body={body}
                    onUpdateConversation={handleUpdateConversation}
                />
            ) : (
                <p>{body}</p>
            )}
            {isPresentUser ? (
                <div className="actions">
                    <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                        <span role="img" aria-label="edit">
                            ✏️
                        </span>
                    </button>
                    <button onClick={handleDeleteClick}>
                        <span role="img" aria-label="delete">
                            🗑️
                        </span>
                    </button>
                </div>
            ) : null}
        </li>
    );
       
}

export default Conversation;