import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import UploadFile from './UploadFile';
      function App() {
        return (
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/uploadFile" element={<UploadFile />} />
            </Routes>
          </Router>
        );
      }

      export default App;
