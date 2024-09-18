// components/Project.js
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

function Project({ title, description, image }) {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={image} />}
  >
    <Meta title={title} description={description} />
  </Card>
  );
}

export default Project;