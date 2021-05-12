import { all, call, put, spawn, takeEvery } from 'redux-saga/effects';
import { AUTH, SET_ADD_PAINTING, START_SET_PAINTINGS } from '../actions/actionTypes';
import axios from 'axios';
import { authFail, authSuccess } from '../actions/auth';
import { addPainting, setPaintings } from '../actions/paintings';


import { database, storageRef } from '../../api/index';


const pushToSave = (data: any): any => {

  return database.collection('users').add(data);
};
//
const getPaintings = (data: any): any => {

  return database.collection('users').get();
};
//
// const deletePainting = (data: any): any => {
//   return database.ref(`paintings/${data.userId}/${data.id}`).remove();
// };
//
// const editPaintings = (data: any): any => {
//   return database.ref(`paintings/${data.userId}/${data.id}`).update(data);
// };

export function* sagWatcher() {
  yield takeEvery(AUTH, sagaWorker);

}

export function* sagaWatcherPainting() {
  yield takeEvery(SET_ADD_PAINTING, sagaWorkerAddPainting);
}

export function* sagWatcherSetPainting() {
  yield takeEvery(START_SET_PAINTINGS, sagaWorkerSetPainting);

}

//
// export function* sagWatcherDeletePainting() {
//   yield takeEvery(START_REMOVE_PAINTING, sagaWorkerDeletePainting);
// }
//
// export function* sagWatcherEditPainting() {
//   yield takeEvery(START_EDIT_PAINTING, sagaWorkerEditPainting);
//
// }
//
// function* sagaWorkerEditPainting(action: any) {
//   const data = {
//     id: action.payload.id,
//     userId: action.payload.userId,
//     painting: action.payload.updates,
//   };
//   const id = action.payload.id;
//   const updates = action.payload.updates;
//
//
//   yield call(editPaintings, data);
//   try {
//
//     // @ts-ignore
//     console.log(yield put(editPainting(id, updates)));
//   } catch (error) {
//
//   }
// }


// function* sagaWorkerDeletePainting(action: any) {
//   const data = {
//     id: action.payload.id,
//     userId: action.payload.userId,
//   };
//
//   const id = data.id;
//
//   yield call(deletePainting, data);
//   try {
//
//     // @ts-ignore
//     yield put(removePainting(id));
//   } catch (error) {
//
//   }
// }

function* sagaWorkerSetPainting(action: any) {

  try {

    const data = {
      UserId: action.payload.userId,
    };
    // @ts-ignore
    const ref = yield call(getPaintings, data);
    const paintings: any[] = [];


     ref.docs.forEach((childSnap: any) => {
      paintings.push({
        id: childSnap.id,
        ...childSnap.data(),
      });
    });
    console.log(paintings);
    yield put(setPaintings(paintings));
  } catch (error) {

  }

}


function* sagaWorkerAddPainting(action: any) {

  // @ts-ignore
  const imagesRef = storageRef.child(`${action.payload.userId}`);
  imagesRef.putString(action.payload.painting, 'data_url');


  // @ts-ignore
  const result = yield imagesRef.getDownloadURL();


  // @ts-ignore
  // const refer = yield call(imagesRef.getDownloadURL());
  // console.log(refer);
  const data = {

    UserId: action.payload.userId,
    ref: result,

  };


  // // setTimeout(() => {
  // //   imagesRef.getDownloadURL().then((data) => {
  // //     console.log(data);
  // //   });
  // }, 10000);
  // @ts-ignore

  try {

    // @ts-ignore
    const ref = yield call(pushToSave, data);

    yield put(addPainting(ref));
  } catch (error) {

  }


}


function* sagaWorker(action: any) {


  const authData = {
    email: action.payload.email,
    password: action.payload.password,
    // returnSecureToken: true,
    // isSignUp: action.payload.isSignUp,
  };

  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSK13ChfYZNC_Ci3C6Zkc1kQC6i64SJMk';
  if (action.payload.isSignUp) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSK13ChfYZNC_Ci3C6Zkc1kQC6i64SJMk';
  }
  // @ts-ignore

  const res = yield call(axios.post, url, authData);
  yield call(console.log, res);
  try {
    // @ts-ignore

    // @ts-ignore

    // @ts-ignore
    yield put((authSuccess(res.data.idToken, res.data.localId)));

  } catch (error) {
    yield call(console.log, error);
    // @ts-ignore
    yield  put((authFail(error)));
  }


}

export default function* rootSaga() {
  yield all([
    spawn(sagWatcher),
    spawn(sagaWatcherPainting),
    spawn(sagWatcherSetPainting),
    // spawn(sagWatcherDeletePainting),
    // spawn(sagWatcherEditPainting),


  ]);
}



