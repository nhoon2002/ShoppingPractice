// loginReducer


export function storageUploadReducer (
   state = {
     fileURL: '',
     error: false,
     success: false

	},
   action) {


	switch (action.type) {

      case "STORAGE_UPLOAD_ERROR": {
         return {
            ...state,
            error: true
         }
      }
      case "STORAGE_UPLOAD_SUCCESS": {
         return {
            ...state,
            error: false,
            fileURL: action.payload,
            success: true
         }
      }




		default: {
			return state;
		}
	}

	return state;
}
