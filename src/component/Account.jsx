import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Data from '../dumy/Homedumy.json';
import { useParams } from 'react-router-dom';
function Account() {
  const { index } = useParams()
  const [data, setData] = useState()


  useEffect(() => {
    const dataAccount = Data[index]
    console.log(dataAccount)
    setData(dataAccount)
  },
    [])


  return (
    <div className='bg-black d-flex justify-content-center mt-4'>
      <Card style={{ width: '18rem' }} className='bg-dark text-light'>
        <Card.Img variant="top" src={`${data?.image}`} />
        <Card.Body>
          <Card.Title>{data?.username}</Card.Title>
          <Card.Text>
            Follower: {data?.follower}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  )


}

export default Account 