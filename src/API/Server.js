export default class Server {
    static async getProducts() {
        const response = await fetch('./products.json');
        const data = await response.json();
        return data
    }
}