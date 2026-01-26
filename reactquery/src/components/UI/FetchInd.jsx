import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";
import { fetchIndPost } from "../../API/api";

export const FetchInd = () => {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], //useState
    queryFn: () => fetchIndPost(id), //useEffect
  });
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error:{error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        <h1>Post ID Number-{id}</h1>
        <div>
          <p>ID:{data.id}</p>
          <p>Title: {data.title}</p>
          <p>Body:{data.body}</p>
        </div>
        <NavLink to="/rq">
          <button>Go Back</button>
        </NavLink>
      </ul>
    </div>
  );
};
