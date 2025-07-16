// CalendarCell.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CalendarCell from './calendar-cell'
import { CalendarProvider } from './hooks'
import { createRef } from 'react'

describe('CalendarCell', () => {
  it('버튼 클릭 시 setSelectedDate에 해당 날짜가 전달되는지 확인', () => {
    // 1. 테스트용 날짜 & mock 함수
    const mockDate = new Date(2025, 6, 16) // 2025-07-16
    const mockSetSelectedDate = vi.fn()

    const mockMonthRefs = createRef<(HTMLDivElement | null)[]>()

    const contextValue = {
      selectedDate: null,
      setSelectedDate: mockSetSelectedDate,
      currentMonth: new Date(),
      setCurrentMonth: vi.fn(),
      currentMonthAllDates: [],
      allDatesByMonth: [],
      monthRefs: mockMonthRefs,
      getDateVariantStates: () => ({
        isThisMonthDate: true,
        isSunday: false,
        isSaturday: false,
        isTodayDate: false,
      }),
    }
    // 3. 렌더링
    render(
      <CalendarProvider value={contextValue}>
        <CalendarCell date={mockDate} isThisMonthDate={true} />
      </CalendarProvider>,
    )

    // 4. 버튼 클릭
    const button = screen.getByRole('button')
    fireEvent.click(button)

    // 5. setSelectedDate가 올바르게 호출되었는지 검사
    expect(mockSetSelectedDate).toHaveBeenCalledOnce()
    expect(mockSetSelectedDate).toHaveBeenCalledWith(mockDate)
  })
})
