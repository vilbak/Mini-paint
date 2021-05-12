import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../../../UI/Card';
import './style.scss';
import Button from '../../../../UI/Button';

import { startRemovePainting } from '../../../../../store/actions/paintings';

const PaintItem = (props: any) => {

  const dispatch = useDispatch();
  const canvasRef: any = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: any) => {
    let img = new Image();
    img.src = props.painting;
    img.onload = () => {
      ctx.drawImage(img, 10, 10);
    };
  };
  const handleDelete = () => {
    dispatch(startRemovePainting(props.id, props.UserId));
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context);
  }, []);
  return (
    <Card className={'containerItem'}>
      <canvas width={250} height={250} ref={canvasRef} />
      <div className={'buttonContainer'}>
        <Button className={'deleteButton'} onClick={handleDelete}> Delete the painting</Button>
        <Button className={'editButton'}>
          <Link className={'editLink'} to={`/edit/${props.id}`}> Edit</Link>
        </Button>
      </div>
    </Card>)
    ;
};

export default PaintItem;
