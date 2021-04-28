import React from 'react';

class BestBooks extends React.Component {
    
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        return (
            <ul>
                {this.props.books.map(book => {
                    return <li>{book.name}</li>
                    }
                )}
            </ul>
            
        )
    }
}

export default BestBooks;
