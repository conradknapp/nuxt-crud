import axios from "axios";

export async function init({ store, error }) {
  try {
    const res = await axios.get("https://todos-pgyjdqzudh.now.sh/todos");
    store.commit("init", res.data);
  } catch (err) {
    error({ message: "Error: Could not fetch data, connection down" });
  }
}
