export const dogApi = {
  endpoint: 'http://localhost:5000',

  async fetchAll() {
    try {
      const response = await fetch(`${this.endpoint}/breeds`);
      const body = await response.json();
      return body;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchOne(id) {
    try {
      const response = await fetch(`${this.endpoint}/breed/${id}`);
      const body = await response.json();
      const {
        weight: { metric: wMetric },
        height: { metric: hMetric },
      } = body;
      body.weight = wMetric;
      body.height = hMetric;
      return body;
    } catch (error) {
      console.log(error);
    }
  },
};