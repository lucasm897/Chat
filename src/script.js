const chatInput = document.getElementById('chatInput');
const chat = document.getElementById('chat');
const chatMessage = document.getElementById('chatMessage');

chat.addEventListener('submit', (event) => {
    event.preventDefault();

    let div = document.createElement('div');
            div.classList.add('message-send')
            div.innerHTML = `<strong>Você: </strong><p> &nbsp${chatInput.value}</p>`;
            chatMessage.appendChild(div);
            chatInput.value ='';


});
