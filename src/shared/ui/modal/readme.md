# Modal Component

접근성을 고려한 모달 컴포넌트입니다. Portal을 사용하여 DOM 계층 구조와 독립적으로 렌더링되며, 키보드 네비게이션과 스크린 리더 지원을 포함합니다.

## Features

- ✅ Portal 기반 렌더링
- ✅ 키보드 네비게이션 지원 (ESC로 닫기)
- ✅ 스크린 리더 접근성 지원
- ✅ 외부 클릭으로 닫기
- ✅ 제어 가능한 상태 관리
- ✅ TypeScript 지원

## Components

### ModalRoot

모달의 루트 컴포넌트로, 상태 관리와 컨텍스트를 제공합니다.

```tsx
import { ModalRoot } from '@/shared/ui/modal'
;<ModalRoot defaultOpen={false} onOpenChange={(open) => console.log(open)}>
  {/* 모달 컴포넌트들 */}
</ModalRoot>
```

**Props:**

- `defaultOpen?: boolean` - 초기 열림 상태
- `onOpenChange?: (open: boolean) => void` - 상태 변경 콜백
- `children: ReactNode` - 모달 컴포넌트들

### ModalTrigger

모달을 여는 트리거 버튼입니다.

```tsx
import { ModalTrigger } from '@/shared/ui/modal'

<ModalTrigger>Open Modal</ModalTrigger>
<ModalTrigger asChild>
  <button>Custom Button</button>
</ModalTrigger>
```

**Props:**

- `asChild?: boolean` - 자식 요소를 트리거로 사용
- `children: ReactNode` - 버튼 내용
- 기타 HTML button 속성들

### ModalPortal

모달을 Portal로 렌더링합니다.

```tsx
import { ModalPortal } from '@/shared/ui/modal'
;<ModalPortal>
  <ModalOverlay />
  <ModalContent>{/* 모달 내용 */}</ModalContent>
</ModalPortal>
```

**Props:**

- `children: ReactNode` - Portal로 렌더링할 내용
- `containerElement?: HTMLElement` - Portal 컨테이너 (기본값: document.body)

### ModalOverlay

모달 배경 오버레이입니다. 클릭하면 모달이 닫힙니다.

```tsx
import { ModalOverlay } from '@/shared/ui/modal'
;<ModalOverlay className="bg-black/50" />
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML div 속성들

### ModalContent

모달의 메인 콘텐츠 컨테이너입니다.

```tsx
import { ModalContent } from '@/shared/ui/modal'
;<ModalContent className="max-w-md">
  <ModalTitle>제목</ModalTitle>
  <ModalDescription>설명</ModalDescription>
</ModalContent>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML div 속성들

### ModalTitle

모달의 제목입니다.

```tsx
import { ModalTitle } from '@/shared/ui/modal'
;<ModalTitle>모달 제목</ModalTitle>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML h3 속성들

### ModalDescription

모달의 설명 텍스트입니다.

```tsx
import { ModalDescription } from '@/shared/ui/modal'
;<ModalDescription>모달에 대한 설명입니다.</ModalDescription>
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML p 속성들

### ModalCloseButton

모달을 닫는 버튼입니다.

```tsx
import { ModalCloseButton } from '@/shared/ui/modal'
;<ModalCloseButton className="absolute top-4 right-4" />
```

**Props:**

- `className?: string` - 추가 스타일링
- 기타 HTML button 속성들 (onClick 제외)

## Basic Usage

### 기본 모달

```tsx
import {
  ModalRoot,
  ModalTrigger,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
} from '@/shared/ui/modal'

function BasicModal() {
  return (
    <ModalRoot>
      <ModalTrigger>Open Modal</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>모달 제목</ModalTitle>
          <ModalDescription>모달 내용입니다.</ModalDescription>
          <ModalCloseButton />
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
  )
}
```

### 외부 상태로 제어

```tsx
import { useState } from 'react'

function ControlledModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ModalRoot defaultOpen={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>Open Modal</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>제어된 모달</ModalTitle>
          <ModalDescription>외부 상태로 제어됩니다.</ModalDescription>
          <ModalCloseButton />
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
  )
}
```

### 커스텀 트리거

```tsx
function CustomTriggerModal() {
  return (
    <ModalRoot>
      <ModalTrigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">커스텀 버튼</button>
      </ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>커스텀 트리거</ModalTitle>
          <ModalDescription>커스텀 버튼으로 열린 모달입니다.</ModalDescription>
          <ModalCloseButton />
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
  )
}
```

## Styling

모든 컴포넌트는 `className` prop을 통해 스타일링을 커스터마이즈할 수 있습니다.

```tsx
<ModalContent className="max-w-lg bg-gray-100">
  <ModalTitle className="text-2xl text-blue-600">커스텀 스타일</ModalTitle>
  <ModalDescription className="text-gray-600">커스텀 스타일이 적용된 모달입니다.</ModalDescription>
</ModalContent>
```

## Accessibility

- 모달은 Portal을 사용하여 DOM 계층 구조와 독립적으로 렌더링됩니다
- ESC 키로 모달을 닫을 수 있습니다
- 오버레이 클릭으로 모달을 닫을 수 있습니다
- 스크린 리더를 위한 적절한 ARIA 속성이 포함되어 있습니다
- 포커스 관리를 통해 키보드 네비게이션을 지원합니다

## Best Practices

1. **Portal 사용**: 모달은 항상 `ModalPortal`로 감싸서 렌더링하세요
2. **오버레이 포함**: 접근성을 위해 `ModalOverlay`를 포함하세요
3. **제목 제공**: `ModalTitle`을 사용하여 모달의 목적을 명확히 하세요
4. **닫기 버튼**: `ModalCloseButton`을 제공하여 명시적인 닫기 방법을 제공하세요
5. **상태 관리**: 복잡한 상태 관리가 필요한 경우 외부 상태를 사용하세요
