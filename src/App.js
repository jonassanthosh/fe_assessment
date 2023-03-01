import { createContext, useEffect, useState } from 'react';
import UserCard from './components/UserCard'
import { Col, Row } from 'antd';
import Spinner from 'react-spinkit';

export const DataContext = createContext()
function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <>
      {
        isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Spinner name='circle' style={{ width: '75px', height: '75px' }} />
          </div>
        ) : (
          <DataContext.Provider value={{ users, setUsers }}>
            <Row>
              {users.map((user, index) => {
                return (
                  <Col xl={6} lg={8} md={8} sm={24} xs={24} key={index}>
                    <UserCard index={index} />
                  </Col>
                )
              })}
            </Row>
          </DataContext.Provider >
        )
      }
    </>
  );
}

export default App;

// Card - avatar, Name, Email, Website
// Button - Like, Edit, Delete
// Edit Modal - Name, Email, Mobile, Website