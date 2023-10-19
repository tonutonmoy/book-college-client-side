import { useQuery } from "@tanstack/react-query";

const UseSingleUser = (email) => {



    const { isLoading, error, data,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`https://booking-college-server-side.vercel.app/allUsers?email=${email}`).then(
            (res) => res.json(),
          )
          .catch(error=> console.log(error))
      })
  return [data, refetch];
};
export default UseSingleUser;