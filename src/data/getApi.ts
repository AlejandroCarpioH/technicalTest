import axiosInstance from "./axiosConfig";
interface data {
  userId: number;
}
interface dataApi {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
}

export const getApi = async ({ userId }: data) => {
  const { data } = await axiosInstance.get<dataApi>(`/${userId}`);
  return data;
};
