import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import NavBar from "./components/NavBar"
import { Route, Routes } from 'react-router';
import DashBoard from './pages/DashBoard';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Invoice from './pages/Invoice';
import Form from './pages/Form';
import Bar from './pages/Bar';
import Pie from './pages/Pie';
import Line from './pages/Line';
import FAQ from './pages/FAQ';
import GeoGraphy from './pages/GeoGraphy';
import Calendar from './pages/Calendar';
import SideBar from './components/SideBar';
import { useState } from 'react';



function App() {
  const [theme, colorMode] = useMode()
  const [isSideBar, setIsSideBar] = useState(true)


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSideBar={isSideBar} />
          <main className='content'>
            <NavBar setIsSideBar={setIsSideBar} />
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contact />} />
              <Route path='/invoices' element={<Invoice />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<GeoGraphy />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
