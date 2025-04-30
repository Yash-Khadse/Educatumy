import { useState, useEffect } from 'react';
import axios from 'axios';

interface Service {
  _id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/services`, {
          withCredentials: true
        });
        
        if (response.data.success) {
          setServices(response.data.data);
        } else {
          setError('Failed to fetch services');
          console.error('Server response error:', response.data);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const errorMessage = err.response?.data?.message || err.message;
          setError(`An error occurred while fetching services: ${errorMessage}`);
          console.error('Axios error details:', {
            message: err.message,
            response: err.response?.data,
            status: err.response?.status,
            config: {
              url: err.config?.url,
              method: err.config?.method,
              headers: err.config?.headers
            }
          });
        } else {
          setError('An unexpected error occurred while fetching services');
          console.error('Unexpected error:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};