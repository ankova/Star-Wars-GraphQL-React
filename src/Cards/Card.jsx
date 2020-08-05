import React, { useState, useContext, useEffect } from 'react';
import { Card, Row, Col, Container, ListGroup } from 'react-bootstrap';
import WinsCount from '../Wins/Wins';
import { PlayersContext } from '../Players/PlayersContext';

const PlayerCard = ({ playerAttrs, index }) => {
    const [selectedAttr, setSelectedAttr] = useState();
    const [players, setPlayersContext] = useContext(PlayersContext);

    const clickHandler = (ev, key) => {
        ev.preventDefault();
        setSelectedAttr(key);
    };

    useEffect(() => {
        if (players[0].attrs[selectedAttr] > players[1].attrs[selectedAttr]) {
            setPlayersContext(players => {
                players[0].wins++;
                return [...players];
            });
        }
        if (players[0].attrs[selectedAttr] < players[1].attrs[selectedAttr]) {
            setPlayersContext(players => {
                players[1].wins++;
                return [...players];
            });
        }

    }, [selectedAttr]);

    useEffect(() => {
        if (playerAttrs) {
            Object.entries(playerAttrs).map(([name, value]) => {
                setPlayersContext(players => {
                    if (!players[index].attrs[name]) {
                        players[index].attrs[name] = value;
                    }
                    return players;
                });
            });
        }
    }, [playerAttrs]);


    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Container>
                        <Row>
                            <Col md={5}>
                                Player: {index + 1}
                            </Col>
                            <Col md={{ span: 3, offset: 3 }}>
                                <WinsCount count={players[index].wins} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Selected Attr:
                                <strong>
                                    {selectedAttr}
                                </strong>
                            </Col>
                        </Row>
                    </Container>
                </Card.Header>
                <ListGroup variant="flush">
                    {Object.entries(playerAttrs).map(([name, value], i) => (
                        name !== '__typename' &&
                        < ListGroup.Item
                            key={i}
                            className={name !== 'name' ? 'list-group-item-action' : 'list-group-item'}
                            onClick={(e) => clickHandler(e, name)}>
                            <strong>{name}: </strong>{value}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Col >
    )
}

export default PlayerCard;