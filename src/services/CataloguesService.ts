import axios from "axios";

export default class CataloguesService {
  static async getCatalogues() {
    const response = await axios.get(
      "proxy-server-for-jobs-website.vercel.app/2.0/catalogues/",
      {
        headers: { "x-secret-key": "GEU4nvd3rej*jeh.eqp" },
      }
    );
    
    return response.data;
  }
}
