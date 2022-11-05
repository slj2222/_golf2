import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import HomeContainer from './components/HomeContainer';
import Navbar from './components/Navbar';
import DayContainer from './components/DayContainer';
import ReserveContainer from './components/ReserveContainer';

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
// _______________________________________________________________________________________________________________________________________
const [allTeeDays, setAllTeeDays] = useState([])

const rightNowDate = new Date()
// console.log(rightNow)
const rightNowDateOnly = new Date(rightNowDate.setHours(0, 0, 0, 0))
// console.log(rightNowDateOnly)

const yesterdayDate = new Date(rightNowDate.setDate(rightNowDate.getDate() - 1))
// console.log(yesterdayDate)

const yesterdayDateOnly = new Date(yesterdayDate.setHours(0, 0, 0, 0))
// console.log(yesterdayDateOnly)

useEffect(() => {   
  // const teeTimeDayArrayUnix = []
  const tempArr = []
  let n = 14
    for (let i = 0; i < n; i++) {
      // const sevenAm = new Date(rightNow.setHours(i,0,0))
      const twoWeeksOut = yesterdayDateOnly.setDate(yesterdayDateOnly.getDate() + 1)
      // console.log(typeof(twoWeeksOut))
      const twoWeeksOutString = new Date(twoWeeksOut)
      // console.log((twoWeeksOutString))
      
      tempArr.push(twoWeeksOutString)
      // console.log(sevenAm)
    }
    setAllTeeDays(tempArr)
}, [])


// function thirteenDays() {
//
// }

// console.log(allTeeDays)






































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
            

            <Route path='/' element={<HomeContainer currentUser={currentUser} allTeeDays={allTeeDays} />} />
            <Route path='/calendar/:id' element={<DayContainer rightNowDateOnly={rightNowDateOnly} />} />
            <Route path='/calendar/:day/:id' element={<ReserveContainer currentUser={currentUser} />} />
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
