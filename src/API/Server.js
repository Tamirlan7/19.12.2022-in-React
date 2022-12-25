export default class Server {
    static async getProducts() {
        const response = await fetch('./products.json');
        return response.json();
    }
}