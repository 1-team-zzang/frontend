# Bottom Sheet Component

접근성을 고려한 바텀 시트 컴포넌트입니다. 모바일 친화적인 UI로 설계되었으며, 키보드 네비게이션과 스크린 리더 지원을 포함합니다.

## Features

- ✅ 모바일 최적화된 바텀 시트
- ✅ 키보드 네비게이션 지원 (Enter, Space로 핸들바 조작)
- ✅ 스크린 리더 접근성 지원
- ✅ 드래그 핸들바로 조작 가능
- ✅ 제어 가능한 상태 관리
- ✅ TypeScript 지원

## Components

### BottomSheet

바텀 시트의 루트 컴포넌트로, 상태 관리와 컨텍스트를 제공합니다.

```tsx
import { BottomSheet } from '@/shared/ui/bottom-sheet'

<BottomSheet defaultOpen={false} onOpenChange={(open) => console.log(open)}>
  {/* 바텀 시트 컴포넌트들 */}
</BottomSheet>
```

**Props:**

- `defaultOpen?: boolean` - 초기 열림 상태
- `onOpenChange?: (open: boolean) => void` - 상태 변경 콜백
- `children: ReactNode` - 바텀 시트 컴포넌트들

### BottomSheetContainer

바텀 시트의 메인 컨테이너입니다. 시각적 프레임과 애니메이션을 처리합니다.

```tsx
import { BottomSheetContainer } from '@/shared/ui/bottom-sheet'

<BottomSheetContainer>
  {/* 바텀 시트 내용 */}
</BottomSheetContainer>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML div 속성들

### BottomSheetHandleBar

바텀 시트를 드래그하여 조작할 수 있는 핸들바입니다.

```tsx
import { BottomSheetHandleBar } from '@/shared/ui/bottom-sheet'

<BottomSheetHandleBar 
  onDragStart={() => console.log('드래그 시작')}
  onDragEnd={() => console.log('드래그 종료')}
/>
```

**Props:**

- `onDragStart?: () => void` - 드래그 시작 시 콜백
- `onDragEnd?: () => void` - 드래그 종료 시 콜백
- `className?: string` - 추가 스타일링
- 기타 HTML div 속성들

### BottomSheetHeader

바텀 시트의 헤더 영역을 담는 컨테이너입니다.

```tsx
import { BottomSheetHeader } from '@/shared/ui/bottom-sheet'

<BottomSheetHeader>
  <BottomSheetHeaderTitle>제목</BottomSheetHeaderTitle>
  <BottomSheetHeaderButton>액션</BottomSheetHeaderButton>
</BottomSheetHeader>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML div 속성들

### BottomSheetHeaderTitle

헤더의 제목을 표시하는 컴포넌트입니다.

```tsx
import { BottomSheetHeaderTitle } from '@/shared/ui/bottom-sheet'

<BottomSheetHeaderTitle>바텀 시트 제목</BottomSheetHeaderTitle>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML 속성들

### BottomSheetHeaderButton

헤더의 액션 버튼입니다. 클릭 시 자동으로 바텀 시트가 닫힙니다.

```tsx
import { BottomSheetHeaderButton } from '@/shared/ui/bottom-sheet'

<BottomSheetHeaderButton onClick={() => console.log('액션 실행')}>
  저장
</BottomSheetHeaderButton>
```

**Props:**

- `onClick?: (...args: any[]) => void` - 클릭 시 실행될 콜백
- `textClassName?: string` - 텍스트에 적용할 CSS 클래스
- `className?: string` - 추가 스타일링
- 기타 HTML button 속성들 (onClick 제외)

### BottomSheetContent

바텀 시트의 메인 콘텐츠 영역입니다.

```tsx
import { BottomSheetContent } from '@/shared/ui/bottom-sheet'

<BottomSheetContent>
  <p>바텀 시트의 메인 콘텐츠입니다.</p>
</BottomSheetContent>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML div 속성들

## Basic Usage

### 기본 바텀 시트

```tsx
import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetHandleBar,
  BottomSheetHeader,
  BottomSheetHeaderTitle,
  BottomSheetHeaderButton,
  BottomSheetContent,
} from '@/shared/ui/bottom-sheet'

function BasicBottomSheet() {
  return (
    <BottomSheet>
      <BottomSheetContainer>
        <BottomSheetHandleBar />
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>바텀 시트 제목</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton onClick={() => console.log('저장됨')}>
            저장
          </BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <p>바텀 시트 내용입니다.</p>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
```

### 외부 상태로 제어

```tsx
import { useState } from 'react'

function ControlledBottomSheet() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BottomSheet defaultOpen={isOpen} onOpenChange={setIsOpen}>
      <BottomSheetContainer>
        <BottomSheetHandleBar />
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>제어된 바텀 시트</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton onClick={() => console.log('저장됨')}>
            저장
          </BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <p>외부 상태로 제어되는 바텀 시트입니다.</p>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
```

### 커스텀 스타일링

```tsx
function CustomStyledBottomSheet() {
  return (
    <BottomSheet>
      <BottomSheetContainer className="h-3/4 bg-gray-50">
        <BottomSheetHandleBar className="bg-blue-500" />
        <BottomSheetHeader className="border-b border-gray-200">
          <BottomSheetHeaderTitle className="text-xl font-bold">
            커스텀 제목
          </BottomSheetHeaderTitle>
          <BottomSheetHeaderButton 
            onClick={() => console.log('액션 실행')}
            textClassName="text-blue-500"
          >
            커스텀 버튼
          </BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent className="p-4">
          <p>커스텀 스타일이 적용된 바텀 시트입니다.</p>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
```

## Styling

모든 컴포넌트는 `className` prop을 통해 스타일링을 커스터마이즈할 수 있습니다.

```tsx
<BottomSheetContainer className="h-3/4 bg-gray-50">
  <BottomSheetHandleBar className="bg-blue-500" />
  <BottomSheetHeader className="border-b border-gray-200">
    <BottomSheetHeaderTitle className="text-xl font-bold">커스텀 스타일</BottomSheetHeaderTitle>
  </BottomSheetHeader>
  <BottomSheetContent className="p-4">
    <p>커스텀 스타일이 적용된 바텀 시트입니다.</p>
  </BottomSheetContent>
</BottomSheetContainer>
```

## Accessibility

- 바텀 시트는 화면 하단에서 슬라이드 업 애니메이션으로 표시됩니다
- 핸들바는 키보드로 포커스 가능하며, Enter나 Space 키로 조작할 수 있습니다
- 스크린 리더를 위한 적절한 ARIA 속성이 포함되어 있습니다
- 포커스 관리를 통해 키보드 네비게이션을 지원합니다

## Best Practices

1. **핸들바 포함**: 사용자 경험을 위해 `BottomSheetHandleBar`를 포함하세요
2. **제목 제공**: `BottomSheetHeaderTitle`을 사용하여 바텀 시트의 목적을 명확히 하세요
3. **액션 버튼**: `BottomSheetHeaderButton`을 제공하여 명시적인 액션 방법을 제공하세요
4. **상태 관리**: 복잡한 상태 관리가 필요한 경우 외부 상태를 사용하세요
5. **모바일 최적화**: 바텀 시트는 모바일 환경에 최적화되어 있으므로, 데스크톱에서는 적절한 대안을 고려하세요