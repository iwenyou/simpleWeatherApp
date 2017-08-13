import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log('action received', action);

  switch (action.type){
    case FETCH_WEATHER:
      console.log(action.payload.data);
      return state.concat([ action.payload.data ]);
      // return [ action.payload.data, ...state]; //[city, city, city] NOT [city,[city, city]]
    }
  console.log(state);
  return state;
}
