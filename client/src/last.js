import React, { useState } from 'react';
import Axios from "axios";

function UserForum() {
    const scrollToUserForum = () => {
        const forumElement = document.querySelector('.message');
        forumElement.scrollIntoView({ behavior: 'smooth' });
    };

    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        let messageInput = e.target.message.value;
        if (messageInput.trim() !== '') {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
            messageInput = messageInput.match(/.{1,40}/g).join("\n");
            const newMessage = {
                user: username,
                message: messageInput,
                timestamp: formattedDate,
                isLiked: false, // 初始設置未按讚
            };

            setMessages([...messages, newMessage]);
            e.target.reset();
        }
    };

    const commentCount = messages.length; // 計算留言數量

    const handleLike = (index) => {
        const updatedMessages = [...messages];
        updatedMessages[index].isLiked = !updatedMessages[index].isLiked;
        setMessages(updatedMessages);
    };

    /*MySQL*/


    return (
        <div className="message-container">
            <div className="message" onClick={scrollToUserForum}>用戶論壇</div>
            <br />
            <form onSubmit={handleMessageSubmit}>
                <div>用戶<input type="text" name="username" placeholder="你的名稱" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
                <br />
                <div>留言<input type="text" name="message" placeholder="想說什麼" /><button type="submit">發送</button></div>
            </form>
            <br></br>

            <h1 style={{ marginLeft: '120px' }}>{commentCount}則留言</h1>

            <div className='container'>
                <div className="comment-section">
                    <fieldset>
                        <ul>
                            {messages.map((message, index) => (
                                // ...（之前的程式碼）

<div key={index} className="message-text" style={{ textAlign: 'left', marginLeft: '-20px' }}>
    <div>
        <p>F{index + 1} - {message.timestamp} - {message.user}</p>
        {message.message}
        <button onClick={() => handleLike(index)} style={{ marginLeft: '10px' }}>
            {message.isLiked ? '收回讚' : '讚'}
        </button>
        <span>{message.isLiked ? '👍' : ''}</span>
        <br></br>
    </div>
</div>

                                
                            ))}
                        </ul>
                    </fieldset>
                </div>
                {/* ...其他內容 */}
                <div className="message-container3">
                    <fieldset>
                        <h2>更多資訊</h2>
                        {/* ...其他內容 */}
                        <div className="block-blockchain">
                    <img className="blockchain" src="https://github.com/PeiHsiuLu/PeiHsiuLu/blob/main/%E5%8D%80%E5%A1%8A%E9%8F%88.jpg?raw=true" alt="Blockchain" />
                    <a href="https://blockcast.it/">
                        <h1>幣圈資訊區</h1>
                    </a>
                </div>
                <div className="news-news">
                    <img className="news" src="https://github.com/PeiHsiuLu/PeiHsiuLu/blob/main/%E9%8F%88%E6%96%B0%E8%81%9E.jpg?raw=true" alt="News" />
                    <a href="https://abmedia.io/">
                        <h1>幣圈新聞</h1>
                    </a>
                </div>
                <div className="invenst-invenst">
                    <img className="invenst" src="https://github.com/PeiHsiuLu/PeiHsiuLu/blob/main/%E6%AF%94%E7%89%B9%E5%B9%A3.jpg?raw=true" alt="Invest" />
                    <a href="https://www.okx.com/hk/join?channelId=ACE520352&msclkid=1f8ff8d5fc2e1938aaae9dbeb0138086">
                        <h1>我要投資</h1>
                    </a>
                </div>
                    </fieldset>
                </div>

            </div>
        </div>
    );
}

export default UserForum;

