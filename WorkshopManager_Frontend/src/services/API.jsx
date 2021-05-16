export default class API {
    async populateData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}