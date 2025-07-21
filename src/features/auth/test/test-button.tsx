import Button from '@/shared/ui/button/button.tsx'

import useTestMutation from './use-test-mutation'

export default function TestButton() {
  const testMutation = useTestMutation()
  const handleClick = () => {
    testMutation.mutate()
  }

  return <Button onClick={handleClick}>test button</Button>
}
