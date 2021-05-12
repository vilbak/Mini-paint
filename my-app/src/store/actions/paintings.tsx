import * as actionTypes from './actionTypes';

export const setAddPainting = (painting: any, userId: any) => (

  {
    type: actionTypes.SET_ADD_PAINTING,
    payload: { painting, userId },

  }
);

export const addPainting = (painting: any) => (
  {
    type: actionTypes.ADD_PAINTING,
    painting,
  }
);

export const setPaintings = (paintings: any) => ({
  type: actionTypes.SET_PAINTINGS,
  payload: { paintings },

});

export const startSetPaintings = (userId: any) => (
  {

    type: actionTypes.START_SET_PAINTINGS,
    payload: { userId },

  }
);

export const startRemovePainting = (id: any, userId: any) => (
  {

    type: actionTypes.START_REMOVE_PAINTING,
    payload: { id, userId },

  }
);

export const removePainting = (id: any = {}) => (
  {
    type: actionTypes.REMOVE_PAINTING,
    id,
  }
);
export const startEditPainting = (userId: any, id: any, updates: any) => (
  {
    type: actionTypes.START_EDIT_PAINTING,
    payload: { userId, id, updates },

  }
);

export const editPainting = (id: any, updates: any) => (

  {
    type: actionTypes.EDIT_PAINTING,
    id,
    updates,
  }
);


