import { useQuery } from "@tanstack/react-query";

const UseCollageDetails = (id) => {



    const { isLoading, error, data,refetch } = useQuery({
        queryKey: ['allCollages',id],
        queryFn: () =>
          fetch(`https://booking-college-server-side.vercel.app/allCollages/${id}`).then(
            (res) => res.json(),
          )
          .catch(error=> console.log(error))
      })
  return [data, refetch];
};
export default UseCollageDetails;