import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api-data" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}

export default App;
