import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
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
    <Card className={'container'}>
      <canvas width={600} height={400} ref={canvasRef} />
      )
      <Button onClick={handleDelete}> Delete the painting</Button>
      <Button>
        <Link className={'editButton'} to={`/edit/${props.id}`}> Edit</Link>
      </Button>
    </Card>)
    ;
};

export default PaintItem;
