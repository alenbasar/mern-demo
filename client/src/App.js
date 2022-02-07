import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(Number());
  const [profession, setProfession] = useState('');

  const fetchAPI = async () => {
    const res = await axios.get('http://localhost:8000/users');
    try {
      console.log(JSON.stringify(res));
    } catch (error) {
      res.json(error);
    }
  };
  fetchAPI();

  const submitHandler = async (e) => {
    e.preventDefault();

    // const newUserData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   age: age,
    //   profession: profession,
    // };

    try {
      const data = await axios.post('http://localhost:8000/users', {
        firstName: firstName,
        lastName: lastName,
        age: age,
        profession: profession,
      });
      // const res = await data.json();
      // if (res.error) throw new Error('');
      console.log('user created');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'></header>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type='text'
          value={firstName}
          placeholder='First Name'
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <input
          type='text'
          value={lastName}
          placeholder='Last Name'
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <input
          type='number'
          value={age}
          placeholder='Age'
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <input
          type='text'
          value={profession}
          placeholder='Profession'
          onChange={(e) => {
            setProfession(e.target.value);
          }}
        />
        <button type='submit'>Create New User</button>
      </form>
    </div>
  );
}

export default App;
