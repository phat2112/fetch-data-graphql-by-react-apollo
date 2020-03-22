import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo';

const GET_BOOKS = gql`
    query{
        books{
            id,
            title,
            available
        }
    }
`

const BookList = props => {
    return (
        <div>
            <Query query={GET_BOOKS}>
                {({loading, error, data}) => {
                    if(loading){
                        return <div>Loading..</div>
                    }
                    if(error){
                        return <div>{error.toString()}</div>
                    }
                    console.log(data)
                    return(
                        <ul>
                            {data.books.map((item, index) => (
                                <li key={index}>{item.title}</li>
                            ))}
                        </ul>
                    )
                }}
            </Query>
        </div>
    );
};

BookList.propTypes = {
    
};

export default BookList;