import axios from "axios";


export const GetAddress = async () => {
    const response = await fetch('http://ec2-100-27-211-19.compute-1.amazonaws.com/address');

    if (response.ok) {
        const data = response.json();
        return data;
    }

    return [];
} 

export async function TakeUserWishList() {
    try {
        const response = await axios.get('http://ec2-100-27-211-19.compute-1.amazonaws.com/account/wishlist', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'sessionid':localStorage.getItem("sessionid")
            },
        });
        console.log("response is : ", response)
        return response.data.products;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}

export async function TakeUserCard() {
    try {
        const response = await axios.get('https://dummyjson.com/carts/6', {
            params: {
                limit: 2,
                skip: 10,
            }
        });
        return response.data.products;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}
