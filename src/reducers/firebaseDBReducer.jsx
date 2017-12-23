
export function firebaseDBReducer (
   state = {
     ref: "",
     snapshot: [],


	},
   action) {


	switch (action.type) {

      case "DB_UPDATE": {
         return {
            ...state,
            snapshot: action.payload
         }
      }




		default: {
			return state;
		}
	}

	return state;
}
