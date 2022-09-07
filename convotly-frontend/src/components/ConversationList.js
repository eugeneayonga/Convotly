import React from "react";
import Conversation from "./Conversation";

function ConversationList({ 
    conversations, 
    presentUser,
    onConversationDelete,
    onUpdateConversation,
}) {
    return (
        <div className="list">
            <ul>
                {conversations.map(conversation => (
                    <Conversation
                        key={conversation.id}
                        conversation={conversation}
                        presentUser={presentUser}
                        onConversationDelete={onConversationDelete}
                        onUpdateConversation={onUpdateConversation}
                    />
                ))}
            </ul>
        </div>
    );
}


export default ConversationList;