import React from 'react'
import Card from 'react-bootstrap/Card';
import data from '../dumy/Homedumy.json';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      {data.map((data, index) => {
        return (
          <div className='d-flex justify-content-center '>
            <div className='d-flex'>
              <Card style={{ width: '18rem' }} className='bg-dark text-light m-3 px-3 py-4'>
                <Link to={`/account/${index}`}className="text-decoration-none text-light" >
                  <div className='d-flex'>
                    <div>
                      <Card.Img variant="top" src={data.image} style={{ borderRadius: "100%", width: "100px", height: "100px" }} />
                    </div>
                    <div>
                      <Card.Body>
                        <Card.Title >{data.username}</Card.Title>
                        <Card.Text >
                          followers {data.follower}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </div>

        )
      })}




    </div>
  )
}

export default Home