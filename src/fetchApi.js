import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchApi = (url, setError) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError && setError(err.response);
      });
  }, [url]);
  return data;
};

export default fetchApi;
