import "./chat.css"

const Chat = () => {
    return (
        <div className="chat">

            <div className="top">

                <div className="user">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                
                <div className="icons">
                    <img src="./phone.png" />
                    <img src="./video.png" />
                    <img src="./info.png" />
                </div>
            </div>
            
            <div className="center"></div>

            <div className="bottom"></div>

        </div>
    )
}

export default Chat;