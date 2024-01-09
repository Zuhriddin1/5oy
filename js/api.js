export const ChekEl = document.getElementById("#chek");
export const clikEl = document.getElementById("#button");
const BASE_URL = "http://localhost:3000";
export let job = "";
export const getData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/data`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
