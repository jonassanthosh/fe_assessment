import { useEffect, useState } from 'react';
import UserCard from './components/UserCard'
import { Col, Row} from 'antd';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Row>
      {users.map((user, index) => {
        return (
          <Col xl={6} lg={8} md={8} sm={24} xs={24} key={index}><UserCard user={user} index={index} /></Col>
        )
      })}
    </Row>
  );
}

export default App;

// Card - avatar, Name, Email, Website
// Button - Like, Edit, Delete
// Edit Modal - Name, Email, Mobile, Website