import { useEffect, useState } from "react";

export const useFetch = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRecipeItemData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${id}`
        );

        if (!res.ok) throw new Error("Something went wrong, try again Later!");
        const data = await res.json();

        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    getRecipeItemData();
  }, []);

  return { data, loading, error };
};
