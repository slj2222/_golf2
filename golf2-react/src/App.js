import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import HomeContainer from './components/HomeContainer';
import Navbar from './components/Navbar';
import DayContainer from './components/DayContainer';
import ReserveContainer from './components/ReserveContainer';
import MyReservationsContainer from './components/MyReservationsContainer';
import MyReservationDetailedCard from './components/MyReservationDetailedCard';

// import logo from './logo.svg';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  // console.log(currentUser)

  const [allTeeDays, setAllTeeDays] = useState([])

  const rightNowDate = new Date()
  // console.log(rightNowDate)
  const rightNowDateOnly = new Date(rightNowDate.setHours(0, 0, 0, 0))
  // console.log(rightNowDateOnly)

  let loadDate = ''

// console.log(new Date().getHours())
  if (new Date().getHours() >= 16) {
    loadDate = new Date()
  } else {
    loadDate = new Date(rightNowDate.setDate(rightNowDate.getDate() - 1))
    // console.log(loadDate)
  }

  const loadDateDateOnly = new Date(loadDate.setHours(0, 0, 0, 0))
  // console.log(loadDateDateOnly)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3001/logged_in", { credentials: 'include' })
      .then((response) =>
      // WORKSS
      {
        response.json()
          .then(data => {
            if (data.logged_in === true) {
              setCurrentUser(data)
              // console.log(data)
            } else {
              handleLogout()
              // console.log(data)
            }
          })
      }
      );
  }, [])

  function handleLogin(user) {
    // console.log(user)
    setCurrentUser(user)
  }

  function handleLogout() {
    setCurrentUser(null)
  }

 

  useEffect(() => {
    const tempArr = []
    let n = 14
    for (let i = 0; i < n; i++) {
      // const sevenAm = new Date(rightNow.setHours(i,0,0))
      const twoWeeksOut = loadDateDateOnly.setDate(loadDateDateOnly.getDate() + 1)
      // console.log(typeof(twoWeeksOut))
      const twoWeeksOutString = new Date(twoWeeksOut)
      // console.log((twoWeeksOutString))

      tempArr.push(twoWeeksOutString)
      // console.log(sevenAm)
    }
    setAllTeeDays(tempArr)
  }, [])

  // _______________________________________________________________________________________________________________________________________

  


const [nonPrivateUsers, setNonPrivateUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setNonPrivateUsers(data))
}, [])


// console.log(nonPrivateUsers)

























  // _______________________________________________________________________________________________________________________________________
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


            <Route path='/' element={<HomeContainer currentUser={currentUser} allTeeDays={allTeeDays} nonPrivateUsers={nonPrivateUsers} />} />
            <Route path='/calendar/:id' element={<DayContainer rightNowDateOnly={rightNowDateOnly}  />} />
            <Route path='/calendar/:day/:id' element={<ReserveContainer currentUser={currentUser} />} />
            <Route path='/reservations' element={<MyReservationsContainer currentUser={currentUser} />} />
            <Route path='/reservations/:id' element={<MyReservationDetailedCard />} />
          </Routes>

        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} handleLogout={handleLogout} />} />
            <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
