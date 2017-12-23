// loginReducer


export function marketplaceUpdateReducer (
   state = {
     itemsArray: []


	},
   action) {


	switch (action.type) {

      case "MARKETPLACE_UPDATED": {
         return {
            ...state,
            itemsArray: Object.values(action.payload)
         }
      }

		default: {
			return state;
		}
	}

	return state;
}
