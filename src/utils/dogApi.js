export const dogApi = {
  endpoint: 'http://localhost:5000/breeds',

  async fetchAll() {
    try {
      const response = await fetch(this.endpoint);
      const body = await response.json();
      console.log(body);
      return body;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchOne(id) {
    try {
      const response = await fetch(`${this.endpoint}/${id}`);
      const body = await response.json();
      return body;
    } catch (error) {
      console.log(error);
    }
  },
};
