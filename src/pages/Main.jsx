import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Row, Container } from 'react-bootstrap';
import PlayerCard from '../Cards/Card';
import Checkbox from '../Checkbox/Checkbox';

const MainPage = () => {
  const [playWith, setPlayWith] = useState('allPersons');
  const personHeight = Math.floor(Math.random() * (300) + 90);
  const rating = Math.floor(Math.random() * 6 + 1);
  const options = ['allPersons', 'allStarships'];

  const queryAll = {
    allPersons: gql`
      query allPersons($height: Int!) {
        allPersons(orderBy: height_DESC, filter: { height_lt: $height }, first: 2) {
          name
          mass
          height
        }
      }
    `,
    allStarships: gql`
    {
      allStarships(filter: { hyperdriveRating_lt: 6}, first: 2) {
        name
        crew
        passengers
        hyperdriveRating
        length
      }
    }
  `
  };

  const handleChange = ({ target }) => {
    setPlayWith(target.value);
  };

  return (
    <Fragment>
      <Container>
        <Row>Select options: </Row>
        <Row >
          {options.map((option, i) => (
            <Checkbox
              key={i}
              option={option}
              onChange={handleChange}
              isChecked={option === playWith}
            />
          ))}
        </Row>
      </Container>
      <Query query={queryAll[playWith]} variables={{ height: personHeight }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Something went wrong</p>;
          return (
            <Container>
              <Row>
                {data[playWith].map((el, index) => (
                  <PlayerCard playerAttrs={el} index={index} key={index} />
                ))}
              </Row>
              <Link to='history'>Wins History</Link>
            </Container>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default MainPage;
