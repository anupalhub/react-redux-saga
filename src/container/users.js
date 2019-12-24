import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Alert, Card, ListGroup, CardColumns, Spinner } from 'react-bootstrap'
import Actions from '../redux/actions'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filerData: null
        }
    }
    componentDidMount() {
        this.props.fetchUserListRequest();
    }

    onClickDelete = (id) => {
        const { users } = this.props;
        const data = this.state.filerData ? this.state.filerData : users
        let filerData = data.reverse().filter(i => i.id !== id)
        this.setState({ filerData })
    }

    render() {
        const { users, isLoading, error } = this.props;
        const { filerData } = this.state;
        let data = filerData ? filerData : users
        if (isLoading) {
            return (
                <div className="spinner-wrapper">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        if (error) {
            return (
                <Alert variant="danger" style={{ textAlign: 'center' }}>
                    Something went Wrong...
                </Alert>
            )
        }
        return (
            <Container>
                <Row>
                    <CardColumns>
                        {data.reverse().map(user =>
                            <Card className="user-card" key={user.id}>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                                    <Card.Text className="title"><span>Email</span></Card.Text>
                                    <Card.Text>{user.email}</Card.Text>
                                    <Card.Text className="title"><span>Address</span></Card.Text>
                                    <Card.Text>{user.address.street}, <br />{user.address.suite}, <br />{user.address.city}<br /> {user.address.zipcode}</Card.Text>
                                </Card.Body>
                                <Card.Link href="javascript:void(0)" className="delelteicon" onClick={() => this.onClickDelete(user.id)}>X</Card.Link>
                                <Card.Footer className="card-head">Company Info</Card.Footer>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{user.company.name}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        )}
                    </CardColumns>
                </Row>
            </Container>
        )
    }
}
export default connect(
    state => ({
        ...state.Users,
    }),
    {
        ...Actions,
    }
)(UserList);