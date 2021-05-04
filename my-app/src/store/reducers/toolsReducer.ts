const initialState = {
  brush: false,
  rect: false,
  circle: false,
};

const toolsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_BRUSH':
      return {
        ...state,
        brush: true,
        rect: false,
        circle: false,
      };
    case 'SET_RECT':
      return {
        ...state,
        rect: true,
        brush: false,
        circle: false,
      };
    case 'SET_CIRCLE':
      return {
        ...state,
        rect: false,
        brush: false,
        circle: true,
      };
    default:
      return state;
  }
};


export default toolsReducer;
