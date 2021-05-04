import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Toolbar from './ToolBar';
import './index.scss';

import Brush from './ToolBar/Tools/Brush';
import Rect from './ToolBar/Tools/Rect';
import Button from '../../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import Circle from './ToolBar/Tools/Circle';
import { setAddPainting, startEditPainting } from '../../../../store/actions/paintings';


const Canvas = (props: any) => {

  const [editPage, setEditPage] = useState(!!props.paint);
  const history = useHistory();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();

  const tools = useSelector((state: any) => state.tools);
  const userId = useSelector((state: any) => state.auth.userId);

  useEffect(() => {
    new Brush(canvasRef.current);
    if (tools.brush) {
      new Brush(canvasRef.current);
    }
    if (tools.rect) {
      new Rect(canvasRef.current);
    }
    if (tools.circle) {
      new Circle(canvasRef.current);
    }

  }, [tools]);

  const draw = (ctx: any) => {
    let img = new Image();
    img.src = props.paint.painting;
    img.onload = () => {
      ctx.drawImage(img, 10, 10);
    };
  };

  useEffect(() => {
    if (editPage) {
      const canvas = canvasRef.current;
      // @ts-ignore
      const context = canvas.getContext('2d');
      draw(context);
    }

  }, []);


  const handleSave = async () => {
    const data = canvasRef.current?.toDataURL();
    if (editPage) {
      await dispatch(startEditPainting(userId, props.paint.id, data));
      history.push('/main');
    } else {
      await dispatch(setAddPainting(data, userId));
      history.push('/main');
    }
  };

  return (
    <div>
      <Toolbar />
      <div className={'canvas'}>
        <canvas ref={canvasRef} width={600} height={400} />
      </div>
      <Button onClick={handleSave}>{editPage ? 'Edit the painting' : 'Save the painting'}</Button>
    </div>
  );
};


export default Canvas;
