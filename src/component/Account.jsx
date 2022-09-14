import React from 'react'
import Card from 'react-bootstrap/Card';
import data from '../dumy/Homedumy.json';

function Account() {

  return (
    <div>
      {data.map((data, index) => {
        return (
          <div className='bg-dark d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className='bg-dark text-light'>
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>{data.username}</Card.Title>
                <Card.Text>
                  followers {data.follower}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        )
      })}


    </div>
  )
}

export default Account 