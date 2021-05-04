import React from 'react';
import Canvas from '../Canvas';
import { connect } from 'react-redux';

const PaintEdit = (props: any) => {

  return (
    <div>
      <Canvas {...props} />
    </div>

  );
};

const mapStateToProps = (state: { paint: any[]; }, props: { match: { params: { id: any; }; }; }) => {
  return {
    paint: state.paint.find((painting: any) => {
      return painting.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(PaintEdit);
