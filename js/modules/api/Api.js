export default class Api {
    urlApi = 'http://localhost:3000/api/products';

    /**
     *
     * @param id
     * @returns {Promise<any>}
     */
    getAPIProduct(id = null) {
        return fetch(id ? `${this.urlApi}/${id}` : this.urlApi)
            .then(response => response.json())
            .then(response => response)
            .catch(e => console.error(e))
    }

    /**
     *
     * @param data
     * @returns {Promise<any>}
     */
    postAPIOrder(data) {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${this.urlApi}/order`, options)
            .then(response => response.json())
            .then(response => response)
            .catch(e => console.error(e))
    }
}
