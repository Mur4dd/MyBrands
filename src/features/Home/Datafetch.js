async function TakeCategories() {
    try {
        const response = await fetch('https://mocki.io/v1/74e38bf1-56c9-4dc6-8c47-1c8ca286796c');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}

async function TakeBrands() {
    try {
        const response = await fetch('https://mocki.io/v1/4434ebcb-d6e6-49f8-8dfa-29d5c4a4701e');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}

export {TakeCategories, TakeBrands}