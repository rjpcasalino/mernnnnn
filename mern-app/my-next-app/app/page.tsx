/* eslint-disable react/jsx-no-target-blank */
"use client";
import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {Button} from '@primer/react'

import { useState, useEffect } from "react";

import "./styles.css";


async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

function ColorBagdes() {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset">
        Badge
      </span>
    </>
  )
}

function Counter() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://[::1]:8080/crud?dbq=test&id=movies`;
      const json = await getData(url);
      if (json) {
        setData(json);
      }
    };
    fetchData();
  }, []);

  const handleAddMovie = async (event) => {
    event.preventDefault();
    try {
      const url = `http://[::1]:8080/crud`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dbq: 'test',
          id: 'movies',
          data: 'New Movie Title!'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };


  const handleButtonClick = async () => {
    const newUrl = `http://[::1]:8080/crud?dbq=test&id=movies&data=""`;
    try {
      const response = await fetch(newUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
      setCount(count + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button variant="danger" onClick={handleButtonClick}>You clicked me {count} times</Button>
      {data && data.ExpressResponse.map(movie => (
        <li key={self.crypto.randomUUID()}>{movie.data}</li>
      ))}
            <form onSubmit={handleAddMovie}>
        <button type="submit">Add Movie</button>
      </form>

    </div>
  );
}


 function MySearch() {
  function publish(formData) {
    const content = formData.get("content");
    const button = formData.get("button");
    alert(`'${content}' was published with the '${button}' button`);
  }

  function save(formData) {
    const content = formData.get("content");
    alert(`Your draft of '${content}' has been saved!`);
  }

  return (
    <form action={publish}>
      <textarea name="content" rows={4} cols={40} />
      <br />
      <button type="submit" name="button" value="submit">Publish</button>
      <button formAction={save}>Save draft</button>
    </form>
  );
}

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('20');
  const ageAsNumber = Number(age);
  return (
    <>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
        <button onClick={() => setAge(ageAsNumber + 10)}>
          Add 10 years
        </button>
      </label>
      {firstName !== '' &&
        <p>Your name is {firstName}.</p>
      }
      {ageAsNumber > 0 &&
        <p>Your age is {ageAsNumber}.</p>
      }
    </>
  );
}

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

 function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
 
function Angular({ alt }) {
  return <Image src={`/avatars/angular.jpg`} alt={alt}  width="64" height="64" />
}
 
function ReturnAngular() {
  return <Angular alt="A portrait" />
}

export default function ToDoList() {
  return (
    // only one parent allowed in jsx
    // <Item name="Nope" isDone="false"/> // example of bad way to do what's done below 
    <div>
     <Card>
      <ReturnAngular/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
     <MyForm />
     <MySearch/>
     <Counter/>
     <ColorBagdes/>
    </div>
  );
}


