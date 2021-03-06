import React from 'react'
import { gql } from '@apollo/client';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const PERSON_QUERY = gql`
    query PersonQuery($name: String!) {
        person(name: $name) {
            name
            height
            mass
            gender
            homeworld
        }
    }
`;

const Person: React.FC = (props: any) => {
    const name = props.match.params.name;
    return (
        <>
            <Query query={PERSON_QUERY} variables={{name}}>
                {
                    (info: any) => {
                        if (info.loading) return <h4>Loading...</h4>;
                        if (info?.error) console.log(info?.error);

                        const { name, 
                            height,
                            mass,
                            gender,
                            homeworld
                        } = info.data.person[0]
                        
                        return <div>
                            <h1 className="display-4 my-3"><span className="text-dark">Person: </span>{name}</h1>
                            <h4 className="mb-3">Person Details</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                <strong>Name: </strong>{name}
                                </li>
                                <li className="list-group-item">
                                <strong>Height: </strong>{height} cm
                                </li>
                                <li className="list-group-item">
                                <strong>Mass: </strong>{mass} kg
                                </li>
                                <li className="list-group-item">
                                <strong>Gender: </strong>{gender}
                                </li>
                                <li className="list-group-item">
                                <strong>Homeworld: </strong>{homeworld}
                                </li>
                            </ul>
                            <hr />
                            <Link to="/" className="btn btn-secondary">Back</Link>
                        </div>;
                    }
                }
            </Query>
        </>
    )
}

export default Person
