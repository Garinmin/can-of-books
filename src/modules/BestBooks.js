import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {CustomPlaceholder} from 'react-placeholder-image';

class BestBooks extends React.Component {
  componentDidMount() {
      this.props.getBooks();
  }
  render() {
    return (
      <>    
        {this.props.books.length &&
          <Carousel>
          {this.props.books.map((book, idx) => {
            return (
              <Carousel.Item key={idx}>
                  <CustomPlaceholder
                    className="d-block w-100"
                    width={1000}
                    height={300}
                    backgroundColor="#007bff"
                    textColor="#ffffff"
                    alt={book.name}
                    text=' '
                  />
              <Carousel.Caption>
                <h3>{book.name}</h3>
                <p>{book.status}</p>
                <Button 
                variant='dark'
                className='mb-2'
                value={idx}
                onClick={this.props.deleteBook}
                >remove this book</Button>

                <Button 
                variant='dark'
                className='mb-2 ml-2'
                value={idx}
                onClick={this.props.showModal}
                >update this book</Button>
              </Carousel.Caption>
            </Carousel.Item>
            )
          }
          )
          }
        </Carousel>
        }
      </>
    )
  }
}

export default BestBooks;
