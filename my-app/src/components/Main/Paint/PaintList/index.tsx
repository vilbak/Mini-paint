import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSetPaintings } from '../../../../store/actions/paintings';
import PaintItem from './PaintItem';
import Button from '../../../UI/Button';

import './style.scss';

export const PaintList = () => {

  const image = useSelector((state: any) => state.paint);
  const userId = useSelector((state: any) => state.auth.userId);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(startSetPaintings(userId));

  }, []);


  return (
    <div className={'contentContainer'}>
      <Button className={'createButton'}>
        <Link className={'link'} to={'/paint'}>Create a new image</Link>
      </Button>
      <div className={'listHeader'}>
        {/*{image.map((image: any) => {*/}
        {/*  return <PaintItem key={image.id} {...image} />;*/}
        {/*})}*/}
      </div>
    </div>
  );
};


export default PaintList;
