import { useQuery } from 'react-query';
import { fetchSampleData } from './api/api';

export const App = () => {
  const { isLoading, error, data, isFetching } = useQuery('samplePosts', fetchSampleData);
  console.log(data);

  return (
    <div className="App">
      <h1>Real Estate App</h1>
    </div>
  );
};

export default App;
