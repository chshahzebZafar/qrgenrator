import React from 'react';
import { Button } from 'react-bootstrap';

function MdButton({ Text }) {
  return (
    <Button className='btn btn-primary'>
      {Text}
    </Button>
  );
}

export default MdButton;