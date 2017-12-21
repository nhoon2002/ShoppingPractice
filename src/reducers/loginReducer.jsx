// loginReducer


export function loginReducer (
   state = {
     signinginAccount: false,
     signinginFacebook: false,
     accountDetails: "",
     error: "",

	},
   action) {


	switch (action.type) {

      case "FACEBOOK_CREATE_ACCOUNT": {
         return {
            ...state,
            signinginFacebook: true,
         }
      }
      case "FACEBOOK_CREATE_ACCOUNT_SUCCESS": {
         return {
            ...state,
            signinginFacebook: false,
            accountDetails: action.payload
         }
      }
      case "FACEBOOK_CREATE_ACCOUNT_ERROR": {
         return {
            ...state,
            signinginFacebook: false,
            error: action.payload
         }
      }



		default: {
			return state;
		}
	}

	return state;
}
