import axios from "axios";

export default class CataloguesService {
  static async getCatalogues() {
    const response = await axios.get(
      "https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/",
      {
        headers: { "x-secret-key": "GEU4nvd3rej*jeh.eqp" },
      }
    );
    
    return response.data;
  }
}
