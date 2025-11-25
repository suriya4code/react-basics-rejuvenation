import React, { useReducer} from 'react'

function RJ_ReducerTrail() {

    interface State {
        count: number;
        error: string | null;
    }

    const reducer = (state: State, action: any): State => {
      console.log("Action Dispatched:", action);
      console.log("Current State:", state);
      state.error = null; // Reset error on every action    
      switch (action) {
            case 'increment':
                if (state.count >= 10) {
                    return { ...state, error: "Count cannot exceed 10" };
                }
                return { ...state, count: state.count + 1 };
            case 'decrement':
                if (state.count <= 0) {
                    return { ...state, error: "Count cannot go below 0" };
                }
                return { ...state, count: state.count - 1 };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div className='reducer-trail-page'>
        <h1 >RJ Reducer Trail Page</h1>
        <div className='counter-section'>
         
        <h2>Count : {state.count}</h2>
        <div className='info-section'>
        <p className='info-text'>Valid Numbers are 1 to 10 </p>
        {state.error && <p className='error-message'>Error: {state.error} !!</p>}

        </div>

        <button onClick={()=>dispatch("increment")}>Increment Count</button>
        <button onClick={()=>dispatch("decrement")}>Decrement Count</button>
        </div>
    </div>
  )
}

export default RJ_ReducerTrail
