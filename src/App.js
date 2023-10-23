import React, { useState } from 'react';
import UserCard from './components/UserCard';

const user = {
  firstname: 'John',
  lastname: 'Doe',
  image: 'https://randomuser.me/api/portraits/men/75.jpg',
  email: 'john.doe@random.com',
};

function App() {
  const [apiuser, setData] = useState(user);

  function HandleClick() {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) =>
        setData({
          firstname: data.results[0].name.first,
          lastname: data.results[0].name.last,
          image: data.results[0].picture.medium,
          email: data.results[0].email,
        })
      );
  }

  console.log(apiuser);

  return (
    <div className="App">
      <UserCard
        firstname={apiuser.firstname}
        lastname={apiuser.lastname}
        image={apiuser.image}
        email={apiuser.email}
      />
      <button onClick={HandleClick}>Récupérer un profil</button>
    </div>
  );
}
export default App;
