import {useQuery } from 'react-query';
const useFire=(id)=>{
    const { isLoading, error, data:project2,refetch } = useQuery(["project", id], () =>
    fetch(`https://radiant-lake-65921.herokuapp.com/project/${id}`).then(res =>
      res.json()
    )
    
  )
  
  if (isLoading) return 'Loading...'

  return [project2, refetch];
}

export default useFire;
