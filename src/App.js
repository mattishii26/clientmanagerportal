import React, { useState, useEffect } from 'react';
import './App.css';

import eventData from './data';

//Import Components
import NavigationComponent from './Component/NavigationComponent';
import TrainingEventComponent from './Component/TrainingEventComponent'


function App() {
  let events = eventData.events;
  const [searchName, setSearchName] = useState('');
  const [courses, setCourses] = useState([]);

  const searchCourse = (event) => {
    setSearchName(event.target.value);
  }

  useEffect(() => {
    const result = events.filter(x => x.Name.toLowerCase().includes(searchName.toLowerCase()));
    setCourses(result);
  }, [searchName]);


  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseDesc, setNewCourseDesc] = useState('');
  const [newCourseDept, setNewCourseDept] = useState('');
  const [newCourseDur, setNewCourseDur] = useState('');
  const [newCourseDate, setNewCourseDate] = useState('');
  const [newCourseTime, setNewCourseTime] = useState('');
  const [newCourseRoom, setNewCourseRoom] = useState('');
  
  const addCourseHandler = () => {

    let error ="";
      if(!newCourseName){
        error += "Required: Course Name\n";
      }
      if(!newCourseDept){
        error += "Required: Course Department\n";
      }
      if(!newCourseDur){
        error += "Required: Course Duration\n";
      }
      if(!newCourseDate){
        error += "Required: Course Date\n";
      }
      if(!newCourseTime){
        error += "Required: Course Time\n";
      }
      if(!newCourseRoom){
        error += "Required: Course Location\n";
      }
      if(error == ""){
        events.push(
          {
            "Name": newCourseName,
          "Description": newCourseDesc,
          "Department": newCourseDept,
          "Duration": newCourseDur, 
          "Date": newCourseDate, 
          "Time": newCourseTime,
          "Location": newCourseRoom, 
          }
        )
        setCourses(events);
        setNewCourseName("");
        setNewCourseDesc("");
        setNewCourseDept("");
        setNewCourseDur("");
        setNewCourseDate("");
        setNewCourseTime("");
        setNewCourseRoom("");
      }else{
        alert(error)
      }
    
  }
  
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>

    
      <div className="container">
        <input
          className="inputField addInput" 
          type="text"
          placeholder="Search Course"
          value={searchName}
          onChange={searchCourse}
        />

        <hr />

        <input
        className="inputField addInput"
          type="text"
          placeholder="New Course Name"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
        />
        <input
        className="inputField addInput"
          type="text"
          placeholder="New Course Description"
          value={newCourseDesc}
          onChange={(e) => setNewCourseDesc(e.target.value)}
        />
        <input
        className="inputField addInput"
          type="text"
          placeholder="New Course Department"
          value={newCourseDept}
          required
          onChange={(e) => setNewCourseDept(e.target.value)}
        />
        <br/>
        <input
        className="inputField addInput"
          type="text"
          placeholder="New Course Duration"
          value={newCourseDur}
          required
          onChange={(e) => setNewCourseDur(e.target.value)}
        />
        <input
        className="inputField addInput"
          type="Date"
          placeholder="New Course Date"
          value={newCourseDate}
          required
          onChange={(e) => setNewCourseDate(e.target.value)}
        />
        <input
        className="inputField addInput"
          type="time"
          placeholder="New Course Time"
          value={newCourseTime}
          required
          onChange={(e) => setNewCourseTime(e.target.value)}
        />
        <input
        className="inputField addInput"
          type="text"
          placeholder="New Course Room"
          value={newCourseRoom}
          required
          onChange={(e) => setNewCourseRoom(e.target.value)}
        />
        <input
          className="button"
          type="button"
          value="Add Course"
          on
          onClick={() => addCourseHandler()}
        />
    
        {
          courses.map(course => {
            return <TrainingEventComponent data={course}></TrainingEventComponent>

          })
        }
        
      </div>


      {/* Different departments, schedule events department wise */}

      {/* 
     functions
     - Schedule new training events
     - Edit upcoming training events
     - View details of already scheduled training events
     - Search for training events based on Name and the matching text should be highlighted

     */}

      {/* Scheduling new training event
    - Tranining Name (Required)
    - Description
    - Department (Required)
    - Duration (Required)
    - Date and Time (Mandatory)
    - Meeting Room # (Mandatory)

     */}
    </div>
  );
}

export default App;
