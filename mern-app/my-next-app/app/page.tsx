/* eslint-disable react/jsx-no-target-blank */
"use client";
import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

import { Container, Form } from 'react-bootstrap';

import ChatInterface from './components/chat';

import Create from './components/create';

const MongoDbForm = () => {
  const [id, setId] = useState('');
  const [movie, setMovie] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!id || !movie) return alert('Please fill all fields');

    try {
      const response = await fetch(`http://localhost:8080/crud`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, movie }),
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <>
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="id">
          <Form.Label>ID (datebase)</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="ID"
          />
        </Form.Group>

        <Form.Group controlId="movie">
          <Form.Label>Movie Title:</Form.Label>
          <Form.Control
            type="text"
            value={movie}
            onChange={(event) => setMovie(event.target.value)}
            placeholder="Toy Story"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
};


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

import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function VariationsExample() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg="primary">Primary</Badge>
      <Badge bg="secondary">Secondary</Badge>
      <Badge bg="success">Success</Badge>
      <Badge bg="danger">Danger</Badge>
      <Badge bg="warning" text="dark">
        Warning
      </Badge>
      <Badge bg="info">Info</Badge>
      <Badge bg="light" text="dark">
        Light
      </Badge>
      <Badge bg="dark">Dark</Badge>
    </Stack>
  );
}

function Counter() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8080/crud?dbq=test&id=movies`;
      const json = await getData(url);
      if (json) {
        setData(json);
      }
    };
    fetchData();
  }, []);

  const handleAddBluth = async (event) => {
    event.preventDefault();
    try {
      const url = `http://localhost:8080/crud`;
      const randomName = [
        "George Bluth Sr.",
        "Lucille Bluth",
        "Michael Bluth",
        "Gob Bluth",
        "Lindsay Bluth Fünke",
        "Buster Bluth",
        "Tobias Fünke",
        "Mister F",
        "Retarded",
        "N elly Bluth"
      ];
      
      const body = JSON.stringify({
        id: 'movies',
        movie: `${randomName[Math.floor(Math.random() * randomName.length)]}`,
      });
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
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
    const newUrl = `http://localhost:8080/crud?dbq=test&id=movies&data=""`;
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
      <Button variant="primary" onClick={handleButtonClick}>You clicked me {count} times</Button>
      {data && data.ExpressResponse.map(movie => (
        <li key={self.crypto.randomUUID()}>{movie.movie}</li>
      ))}
      <form onSubmit={handleAddBluth}>
        <Button variant="secondary" type="submit">Add Bluth</Button>
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
      <br/>
      <Button variant="secondary" type="submit" name="button" value="submit">Publish</Button>
      <br/>
      <Button variant="secondary" type="submit" formAction={save}>Save draft</Button>
    </form>
  );
}

function MyForm() {
  const [firstName, setFirstName] = useState('');
  // const [age, setAge] = useState("20"); // effing n00b
  // https://dev.to/dwjohnston/react-usestate-argument-of-type-string-is-not-assignable-to-parameter-of-type-setstateaction-undefined-27po
  // https://stackoverflow.com/questions/70926039/type-number-is-not-assignable-to-type-setstateactionundefined-react/70926350#70926350
  const [age, setAge] = React.useState<string | number>("0"); 
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
        <Button variant="secondary" onClick={() => setAge(ageAsNumber + 10)}>
          Add 10 years
        </Button>
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
    <>
            <Card>
              <Create/>
              <ChatInterface/>
              <MongoDbForm/>
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
            <VariationsExample/>
    </>
  );
}


