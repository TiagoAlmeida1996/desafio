const BASE_API = 'http://localhost:3000'

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await req.json();
        return data;

    },
    signIn: async (email, password) => {
        try {
            const req = await fetch(`${BASE_API}/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await req.json();
            return data;
        } catch (error) {
            console.error(error)
        }
    },
    getProducts: async () => {
        const req = await fetch(`${BASE_API}/products`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const data = await req.json();
        return data;
    }
}