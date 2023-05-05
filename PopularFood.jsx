/*eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const PopularFood = () => {
    return (
        <div className='mb-4'>
           <h1 className='text-center mt-4'>About Us</h1>

            
            <div className='d-flex position-relative gap-4  grid grid-cols-3'>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                <Card.Title>About us</Card.Title>

                    <Card.Text>
                            Chef’s Pencil is an Bangldeshi food magazine that was launched in 2009 by bangladeshi Hegeman, <br />
                            a Dhaka chef based in , Bangladesh.

                            Chef’s Pencil features content for all <br />
                            levels of cooks and foodies. Our recipes and how-to guides are provided by some <br />
                            of the best chefs in the world. You can take these recipes through your culinary lifetime.
                        </Card.Text>

                </Card.Body>

            </Card>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                <Card.Title>Industry Reports</Card.Title>

                    <Card.Text>
                            In addition to recipes and cooking tips,<br />
                            we regularly report on industry trends and news. Our studies have been covered in top publications <br />
                            such as CNBC, the Guardian, the Independent, the Sydney Morning Herald, Pacific Business News, <br />
                            Eater and bangladesh news.
                            <br /> Follow us on Facebook, Instagram or Pinterest  for the latest recipes and industry news.

                            </Card.Text>
                </Card.Body>

            </Card>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                <Card.Title>Media Coverage</Card.Title>

                    <Card.Text>
                            Chef’s Pencil is featured extensively in the media <br />
                            earning coverage in prestigious publications such as Newsweek,
                            <br />
                    </Card.Text>

                </Card.Body>

            </Card>

            </div>





        </div>
        

    );
};

export default PopularFood;