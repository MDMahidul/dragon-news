import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const {_id,title,details,image_url,category_id} =  news;
    return (
      <div>
        <h2 className='mb-3'>Dragon News</h2>
        <Card className='p-3'>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              <Button variant="danger">
                <FaArrowLeft></FaArrowLeft> All news in this category
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <EditorsInsights/>
      </div>
    );
};

export default News;