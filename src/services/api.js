import axios from "axios";

const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      client_id: "bwJH3Nt_p76FOVEh6z_HwzY8ZkSRfkXzmWX4NpphGoY",
    },
  });
  return response.data;
};

export default fetchImages;
