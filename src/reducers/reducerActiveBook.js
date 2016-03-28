//all reducers get two args, the curent state and the actions.
//only called when actions occur
//state is NOT app state, just the state that this reducer is designed for

export default function(state = null, action) {//if state comes in undefined, set it equal to null ES^ magic
	switch(action.type) {//handles case when the action type matches
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state//handles case when actiontype is not BOOK_SELECTED
}

//most recuers are set up with switch statements to check the action type