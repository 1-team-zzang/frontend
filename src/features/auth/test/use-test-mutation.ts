import { useMutation } from '@tanstack/react-query'

import { postTest } from './test.API'

function useTestMutation() {
  return useMutation({
    mutationFn: () => postTest(),
  })
}

export default useTestMutation
