import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Add from './pages/Add'
import Layout from './Layouts/Layout';
import { useState } from 'react';
import DataMovie from './utils/constans/DataMovie'
import GlobalStyle from './Components/Global/GlobalStyle';

function App() {

  const [data, setData] = useState(DataMovie)

  return (
    <>
    <GlobalStyle/>
    <Layout>
    <Routes>
     <Route path='/' element={<Home item={data} setItem={setData}/>}></Route>
     <Route path='/popular' element={<Popular />}></Route>
     <Route path='/add' element={<Add item={data} setItem={setData}/>}></Route>
   </Routes> 
  </Layout>
  </>
  );
}

export default App;
