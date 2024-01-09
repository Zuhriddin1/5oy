import { getData } from "./js/api";
import { createEachTable } from "./js/app";

const fetchData = async () => {
  try {
    const data = await getData();
    createEachTable(data);
    console.log(data);
  } catch (error) {
    console.error("Error in fetching data:", error);
  }
};

fetchData();
