// loginReducer


export function storageUploadReducer (
   state = {
     fileURL: '',
     error: ""

	},
   action) {


	switch (action.type) {

      case "STORAGE_UPLOAD_ERROR": {
         return {
            ...state,
            error: action.payload
         }
      }
      case "STORAGE_UPLOAD_SUCCESS": {
         return {
            ...state,
            error: '',
            fileURL: action.payload
         }
      }




		default: {
			return state;
		}
	}

	return state;
}
