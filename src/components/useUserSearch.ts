import { useState } from "react";
import { getApi } from "../data/getApi";

const useUserSearch = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const getApiData = async (userId: number) => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await getApi({ userId });
      const { avatar } = data;
      setLoading(false);
      setAvatar(avatar);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  return { avatar, getApiData, loading, error };
};

export default useUserSearch;
