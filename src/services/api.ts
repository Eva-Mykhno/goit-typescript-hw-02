import axios from "axios";

type dataImage = {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};

type dataResponse = {
  results: dataImage[];
  total_pages: number;
};

const fetchImages = async (
  query: string,
  page: number
): Promise<dataResponse> => {
  const response = await axios.get<dataResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        client_id: "bwJH3Nt_p76FOVEh6z_HwzY8ZkSRfkXzmWX4NpphGoY",
      },
    }
  );
  return response.data;
};

export default fetchImages;
