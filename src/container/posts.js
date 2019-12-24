import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Alert, Card, ListGroup, Form, Spinner } from 'react-bootstrap'
import Actions from '../redux/actions'
import renderSelectOption from '../utils'

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null
        }
    }

    componentDidMount() {
        this.props.fetchPostListRequest();
    }

    onSelectUser = (e) => {
        this.setState({ selectedUser: parseInt(e.target.value) })
    }

    render() {
        const { posts, isLoading, error } = this.props;
        const { selectedUser } = this.state;
        const data = selectedUser ? posts.filter(post => post.userId === selectedUser) : posts;
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
                <Alert variant="danger">
                    Something went Wrong...
                </Alert>
            )
        }
        return (
            <Container>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="1">
                            Filter
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control as="select" onChange={this.onSelectUser}>
                                <option value="">Select User ID</option>
                                {renderSelectOption(posts)}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
                <Row>
                    {data.reverse().map(post =>
                        <Col xs={12} key={post.id}>
                            <Card className="post-card" key={posts.id}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h6>{post.title}</h6>
                                        <p>{post.body}</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        )
    }
}
export default connect(
    state => ({
        ...state.Posts,
    }),
    {
        ...Actions,
    }
)(PostList);