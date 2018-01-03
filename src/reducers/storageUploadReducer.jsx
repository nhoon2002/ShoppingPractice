// loginReducer


export function storageUploadReducer (
   state = {
     fileURL: '',
     error: false,
     success: false,
     itemList: []

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
      case "CURRENTUSER_ITEMS_ADDED": {
         return {
            ...state,
            error: false,
            success: true,
            itemList: action.payload
         }
      }




		default: {
			return state;
		}
	}

	return state;
}
