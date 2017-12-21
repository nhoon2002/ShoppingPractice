
export function firebaseDBReducer (
   state = {
     ref: "",
     snapshot: [{'profilePic' : ""},{'profilePic' : ""}],


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
