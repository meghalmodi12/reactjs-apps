import axios from 'axios';

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 7d67d7bc43fa7cb063b57746b6d14a17f96e5b678877208c889f8e9c0bd3af0d"
    }
});