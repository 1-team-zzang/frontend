import { useMutation } from '@tanstack/react-query'

import { postLogout } from '../api/logout.API'

function useLogoutMutation() {
  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {},
    onError: (e) => {
      console.error(e)
    },
  })
}

export default useLogoutMutation
