import UserCard from './components/UserCard'
import { Col, Row, Space } from 'antd';

function App() {
  return (
    <Row>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      <Col xl={6} lg={8} md={8} sm={24} xs={24}  ><UserCard /></Col>
      
      
    </Row>
  );
}

export default App;

// Card - avatar, Name, Email, Website
// Button - Like, Edit, Delete
// Edit Modal - Name, Email, Mobile, Website