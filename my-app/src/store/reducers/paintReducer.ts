import * as actionTypes from '../actions/actionTypes';

const initialState: any = [];


const paintReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case actionTypes.ADD_PAINTING:
      return [
        ...state,
        action.painting,
      ];
    case  actionTypes.SET_PAINTINGS:
      console.log('paintings', action.payload);
      // @ts-ignore
      return [
        ...action.payload.paintings,
      ];


    case actionTypes.REMOVE_PAINTING :
      return state.filter(({ id }: any) => id !== action.id);
    case  actionTypes.EDIT_PAINTING:
      return state.map((painting: any) => {
        if (painting.id === action.id) {
          return {
            ...state,
            ...action.updates,
          };
        } else {
          return painting;
        }
      });
    default:
      return state;
  }
};

export default paintReducer;
