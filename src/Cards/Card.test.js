import React from 'react';
import { mount } from 'enzyme';
import { Card, Row, Col, Container, ListGroup } from 'react-bootstrap';
import WinsCount from '../Wins/Wins';
import PlayerCard from './Card';
import { PlayersProvider } from '../Players/PlayersContext';

describe('Card component', () => {
    let component;
    let props = {
        playerAttrs: {
            name: 'test',
            mass: 230,
            height: 175
        },
        index: 1
    };
    const players = [
        { playerId: 0, wins: 0, attrs: {} },
        { playerId: 1, wins: 0, attrs: {} }
    ];
    const setPlayersContext = jest.fn();
    const TestComponent = () => (
        <PlayersProvider value={[players, setPlayersContext]}>
            <PlayerCard {...props} />
        </PlayersProvider>
    );
    component = mount(<TestComponent />);

    it('should render the component', () => {
        expect(component).toBeDefined();
        expect(component.find('.card')).toHaveLength(1);
        expect(component.find('.list-group-item-action').length).toBe(6);
        expect(component.find('PlayerCard')).toHaveLength(1)
    });
});