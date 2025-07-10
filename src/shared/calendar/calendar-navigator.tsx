interface NavigatorProps {
  next: string
  prev: string
  text: string
  handlePrev: () => void
  handleNext: () => void
}

/**이번달,이전달,이번년,다음년 이동하게 해주는 버튼 컴포넌트 */

export default function CalendarNavigator({ next, prev, text, handlePrev, handleNext }: NavigatorProps) {
  return (
    <div className="flex">
      <button onClick={handlePrev}>{prev}</button>
      <h1>{text}</h1>
      <button onClick={handleNext}>{next}</button>
    </div>
  )
}
