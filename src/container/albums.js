import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Alert, Card, CardColumns, Spinner, Form } from 'react-bootstrap'
import Actions from '../redux/actions'
import renderSelectOption from '../utils'

function renderPhoto(data) {
    let photos = [];
    data.slice(0, 5).map(item => {
        photos.push(<img width="50" key={item.id} src={item.thumbnailUrl} alt={item.title} />)
        return item
    })
    return photos;
}

class AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null
        }
    }

    componentDidMount() {
        this.props.fetchAlbumListRequest();
        this.props.fetchPhotoListRequest();
    }

    onSelectUser = (e) => {
        this.setState({ selectedUser: parseInt(e.target.value) })
    }

    render() {
        const { albums, isLoading, isLoading1, error, photos } = this.props;
        const { selectedUser } = this.state;
        const data = selectedUser ? albums.filter(album => album.userId === selectedUser) : albums;

        if (isLoading || isLoading1) {
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
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="1">
                            Filter
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control as="select" onChange={this.onSelectUser} value={selectedUser ? selectedUser : ""}>
                                <option value="">Select User ID</option>
                                {renderSelectOption(albums)}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
                <Row>
                    <CardColumns>
                        {data.reverse().map(album =>
                            <Card className="user-card" key={album.id}>
                                <Card.Body>
                                    <Card.Title>{album.title}</Card.Title>
                                    {renderPhoto(photos.filter(i => i.albumId === album.id))}
                                </Card.Body>
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
        ...state.Albums,
    }),
    {
        ...Actions,
    }
)(AlbumList);