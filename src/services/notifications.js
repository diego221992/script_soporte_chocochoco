import axios from 'axios';

const telegram = async (message, chatId) => {
    const token = import.meta.env.VITE_TOKEN_TELEGRAM;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        await axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
};

export default { telegram };