document.addEventListener("DOMContentLoaded", function () {
    const chatsDiv = document.querySelector(".chats");
    const messagesDiv = document.querySelector(".messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatName = document.getElementById("chat-name");

    const chatList = [
        { id: 1, name: "Alice", profilePic: "https://via.placeholder.com/50" },
        { id: 2, name: "Bob", profilePic: "https://via.placeholder.com/50" },
        { id: 3, name: "Charlie", profilePic: "https://via.placeholder.com/50" }
    ];

    let selectedChat = null;

    // Populate chat list
    chatList.forEach(chat => {
        const chatDiv = document.createElement("div");
        chatDiv.className = "chat";
        chatDiv.innerHTML = `
            <img src="${chat.profilePic}" alt="${chat.name}" class="chat-pic">
            <h3>${chat.name}</h3>
        `;
        chatDiv.addEventListener("click", () => {
            selectedChat = chat;
            chatName.innerText = chat.name;
            messagesDiv.innerHTML = ""; // Clear previous messages
        });
        chatsDiv.appendChild(chatDiv);
    });

    // Send message
    sendButton.addEventListener("click", function () {
        const message = messageInput.value.trim();
        if (message && selectedChat) {
            // Display the message
            const messageDiv = document.createElement("div");
            messageDiv.className = "message sent";
            messageDiv.innerText = message;
            messagesDiv.appendChild(messageDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;

            // Simulate a reply
            setTimeout(() => {
                const replyDiv = document.createElement("div");
                replyDiv.className = "message received";
                replyDiv.innerText = `Reply from ${selectedChat.name}: ${message}`;
                messagesDiv.appendChild(replyDiv);
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }, 1000);

            messageInput.value = ""; // Clear the input
        }
    });
});
