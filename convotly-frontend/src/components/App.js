import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ConversationList from "./ConversationList";
import NewConversation from "./NewConversation";


const testUser = { author: "Mitchel Kunde" };

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:9292/conversations"
        .then((response) => response.json())
        .then((data) => setConversations(conversations));
    }, []);


    function handleAddConversation(NewConversation) {
        setConversations([...conversations, NewConversation]);
    }

    function handleDeleteConversation(id) {
        const updatedConversations = conversations.filter((conversation) => conversation.id !== id);
        setConversations(updatedConversations);
    }


    function handleUpdateConversation(updatedConversationObj) {
        const updatedConversations = conversations.map((conversation) => {
          if (conversation.id === updatedConversationObj.id) {
            return updatedConversationObj;
          } else {
            return conversations;
          }
        });
        setConversations(updatedConversations);
    }

    const displayedConversations = conversations.filter((conversation) =>
    conversation.body.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <main className={isDarkMode ? "dark-mode" : ""}>
          <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
          <Search search={search} onSearchChange={setSearch} />
          <ConversationList
            conversations={displayedConversations}
            presentUser={testUser}
            onConversationDelete={handleDeleteConversation}
            onUpdateConversation={handleUpdateConversation}
          />
          <NewConversation presentUser={testUser} onAddConversation={handleAddConversation} />
        </main>
      );
    }
    
    export default App;





            

}