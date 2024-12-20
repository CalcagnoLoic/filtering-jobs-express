import { useEffect, useState } from "react";
import { JobDetails,  } from "../definitions";

export const useFetchJobOffers = (id: string) => {
  const [isData, setIsData] = useState<JobDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/job-details/${id}`);

        if (!response.ok)
          throw new Error(`Connexion impossible à l'API ${response.status}`);

        const data = await response.json();

        setIsData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    FetchData();

    return () => {
      setIsData([]);
      setIsLoading(true);
      setIsError(false);
    };
  }, []);

  return { isData, isLoading, isError };
};
