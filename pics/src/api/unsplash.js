import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ffb80d4f6cdfdcabe819aed48b0aae56db458a9e2dd21d1ede630fc523131587'
    }
});