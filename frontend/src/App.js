import { BrowserRouter } from 'react-router-dom';

import { useQuery } from 'react-query';
import { fetchSampleData } from './connectors/auth';
import { Routing } from './config/routing/Routing';

import 'bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css';

export const App = () => {
  const { isLoading, error, data, isFetching } = useQuery('samplePosts', fetchSampleData);
  console.log(data);

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
