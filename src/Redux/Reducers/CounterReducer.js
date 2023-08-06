import { Increment , Decrement } from "../Actions/Types";

const CounterReducer = (state={count : 0} , action) => {
  switch(action.type){
    case Increment:
        return state.count + 1;

        case Decrement:
            return state.count -1;

            default:
                return state;
  }


    
}
export default CounterReducer;