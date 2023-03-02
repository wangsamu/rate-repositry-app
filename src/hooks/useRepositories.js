import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  console.log("patata");
  const [repositories, setRepositories] = useState();
  //   const [loading, setLoading] = useState(false);
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  //   const fetchRepositories = async () => {
  //     setLoading(true);
  //     // const response = await fetch("http://192.168.18.102:5001/api/repositories");
  //     const response = await data;

  //     console.log("response: ", response);
  //     const json = await response.json();

  //     setLoading(false);
  //     console.log(json);
  //     setRepositories(json);
  //   };

  useEffect(() => {
    const newRepositories = data && data.repositories;
    setRepositories(newRepositories);
  }, [data]);

  console.log("data form useQuery: ", data);
  return { repositories, loading, refetch: refetch };
};

export default useRepositories;
