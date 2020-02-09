const fetchOneClosure = (endpoint) => {
  return async (id) => {
    try {
      const response = await fetch(`${endpoint}/${id}`);
      const body = await response.json();
      return body;
    } catch (error) {
      console.log(error);
    }
  };
};

export const breeds = {
  endpoint: 'http://localhost:5000/breeds',

  async fetchAll() {
    try {
      const response = await fetch(`${this.endpoint}`);
      const body = await response.json();
      console.log(body);
      return body;
    } catch (error) {
      console.log(error);
    }
  },
  async fetchOne(id) {
    const body = await fetchOneClosure(this.endpoint)(id);
    console.log(body);
    return body;
  },
};

export const oneBreed = {
  endpoint: 'http://localhost:5000/breed',
  async fetchOneDetails(id) {
    const body = await fetchOneClosure(this.endpoint)(id);
    const {
      weight: { metric: wMetric },
      height: { metric: hMetric },
    } = body;
    body.weight = wMetric;
    body.height = hMetric;
    console.log(body);
    return body;
  },
};

oneBreed.fetchOneDetails(6);
