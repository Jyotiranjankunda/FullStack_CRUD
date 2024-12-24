import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Students from './pages/Students';
import EditModal from './components/EditModal';
import FormModal from './components/FormModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Students />} />
          <Route path='/create' element={<FormModal />} />
          <Route path='/edit/:id' element={<EditModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
