import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" component={< Dashboard />} />
          {/* ... other routes */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;




