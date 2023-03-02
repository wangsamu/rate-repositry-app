import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  console.log("patata");
  //   const [repositories, setRepositories] = useState();
  //   const [loading, setLoading] = useState(false);
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES);

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

  //   useEffect(() => {
  //     setRepositories(data.repositories);
  //   }, [data]);

  console.log(data);

  return { data, loading, refetch: refetch };
};

export default useRepositories;
