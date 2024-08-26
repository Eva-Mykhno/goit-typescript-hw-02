import axios from "axios";

type DataImage = {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};

type DataResponse = {
  results: DataImage[];
  total_pages: number;
};

const fetchImages = async (
  query: string,
  page: number
): Promise<DataResponse> => {
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
