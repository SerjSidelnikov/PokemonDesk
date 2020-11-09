import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const match = useRoutes(routes);
  return match || <NotFound />;
};

export default App;
