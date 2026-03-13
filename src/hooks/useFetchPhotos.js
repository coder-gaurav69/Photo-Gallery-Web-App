import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPhotos = (url) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setPhotos(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [url]);

  return { photos, loading, error };
};

export default useFetchPhotos;
