import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import HomeContainer from './components/HomeContainer';
import Navbar from './components/Navbar';

// import logo from './logo.svg';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUser)

  useEffect(() => {
    fetch("http://localhost:3001/logged_in", { credentials: 'include' })
      .then((response) =>
      // WORKSS
      {
        response.json()
          .then(data => {
            if (data.logged_in === true) {
              setCurrentUser(data)
              console.log(data)
            } else {
              handleLogout()
              console.log(data)
            }
          })
      }
      );
  }, [])

  function handleLogin(user) {
    console.log(user)
    setCurrentUser(user)
  }

  function handleLogout() {
    setCurrentUser(null)
  }

  return (
    <Router>
      {/* {currentUser ? (
                <>
                    <Navbar currentUser={currentUser} handleLogout={handleLogout} getCSRFToken={getCSRFToken} allPublicMembers={allPublicMembers}/>
                    
                </>
            ) : null} */}

      {currentUser ? (
        <>
          <Navbar currentUser={currentUser} handleLogout={handleLogout} />
          <Routes>
            {/* <Route path="/" element={<MonthView availableTeeTimeDayArray={availableTeeTimeDayArray} currentUser={currentUser} />}/>
                        <Route path="/:id" element={<DayView currentUser={currentUser} apiReservations={apiReservations}/>}/>
                        <Route path="/:id/reserve" element={<ReserveView getCSRFToken={getCSRFToken} currentUser={currentUser}/>}/>        
                        <Route path="/reservations" element={<MyReservationsView myReservations={myReservations} getCSRFToken={getCSRFToken} />} /> */}

            <Route path='/' element={<HomeContainer currentUser={currentUser} />} />
          </Routes>

        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} handleLogout={handleLogout}/>} />
            <Route path="/signup" element={<Signup handleLogin={handleLogin}/>} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
