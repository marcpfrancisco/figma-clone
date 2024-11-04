import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Laravel's API base URL
});

export const fetchPages = async () => {
  return api.get("/pages");
};

export const savePage = async (pageData: any) => {
  return api.post("/pages", pageData);
};
