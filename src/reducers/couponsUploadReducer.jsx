// loginReducer


export function couponsUploadReducer (
   state = {
     couponsArray: []


	},
   action) {


	switch (action.type) {

      case "COUPONS_UPDATED": {
         return {
            ...state,
            couponsArray: Object.values(action.payload)
         }
      }

		default: {
			return state;
		}
	}

	return state;
}
