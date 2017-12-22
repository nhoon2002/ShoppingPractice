// loginReducer


export function databaseUpdateReducer (
   state = {
     itemsArray: ''


	},
   action) {


	switch (action.type) {

      case "MARKETPLACE_UPDATED": {
         return {
            ...state,
            itemsArray: action.payload
         }
      }

		default: {
			return state;
		}
	}

	return state;
}
