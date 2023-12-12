import axios from "axios";

import { BASE_API } from "@/utils/Constant";

export default axios.create({
  baseURL: BASE_API,
  maxBodyLength: Infinity
});
