# SegmentedControl

SegmentedControl는 여러 옵션 중 하나를 선택할 수 있는 탭 형태의 UI 컴포넌트입니다. 선택된 옵션에 해당하는 콘텐츠를 조건부로 표시할 수 있습니다.

## 특징

- ✅ Controlled/Uncontrolled 모드 지원
- ✅ TypeScript 완전 지원
- ✅ 접근성 고려 (키보드 네비게이션, ARIA 속성)
- ✅ 커스터마이징 가능한 스타일링
- ✅ 반응형 디자인
- ✅ 부드러운 전환 애니메이션

## 설치

```bash
# 이미 프로젝트에 포함되어 있음
import {
  SegmentedControlRoot,
  SegmentedControlList,
  SegmentedControlItem,
  SegmentedControlContent,
} from '@/shared/ui/segmented-control'
```

## 기본 사용법

### Controlled 모드

```tsx
import { useState } from 'react'
import {
  SegmentedControlRoot,
  SegmentedControlList,
  SegmentedControlItem,
  SegmentedControlContent,
} from '@/shared/ui/segmented-control'

export default function Example() {
  const [selectedTab, setSelectedTab] = useState('tab1')

  return (
    <SegmentedControlRoot value={selectedTab} onValueChange={setSelectedTab}>
      <SegmentedControlList>
        <SegmentedControlItem value="tab1">첫 번째 탭</SegmentedControlItem>
        <SegmentedControlItem value="tab2">두 번째 탭</SegmentedControlItem>
        <SegmentedControlItem value="tab3">세 번째 탭</SegmentedControlItem>
      </SegmentedControlList>
      
      <SegmentedControlContent value="tab1">
        <div>첫 번째 탭의 콘텐츠입니다.</div>
      </SegmentedControlContent>
      <SegmentedControlContent value="tab2">
        <div>두 번째 탭의 콘텐츠입니다.</div>
      </SegmentedControlContent>
      <SegmentedControlContent value="tab3">
        <div>세 번째 탭의 콘텐츠입니다.</div>
      </SegmentedControlContent>
    </SegmentedControlRoot>
  )
}
```

### Uncontrolled 모드

```tsx
<SegmentedControlRoot defaultValue="tab1">
  <SegmentedControlList>
    <SegmentedControlItem value="tab1">첫 번째 탭</SegmentedControlItem>
    <SegmentedControlItem value="tab2">두 번째 탭</SegmentedControlItem>
  </SegmentedControlList>
  
  <SegmentedControlContent value="tab1">
    첫 번째 탭의 콘텐츠
  </SegmentedControlContent>
  <SegmentedControlContent value="tab2">
    두 번째 탭의 콘텐츠
  </SegmentedControlContent>
</SegmentedControlRoot>
```

## 컴포넌트 API

### SegmentedControlRoot

SegmentedControl의 최상위 컨테이너입니다.

```tsx
interface SegmentedControlRootProps {
  children: ReactNode
  value?: string                    // 현재 선택된 값 (controlled mode)
  defaultValue?: string             // 기본 선택값 (uncontrolled mode)
  onValueChange?: (value: string) => void  // 값 변경 시 호출되는 콜백
}
```

### SegmentedControlList

탭 버튼들을 감싸는 컨테이너입니다.

```tsx
interface SegmentedControlListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}
```

### SegmentedControlItem

개별 탭 버튼입니다.

```tsx
interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  value: string               // 탭의 고유 값
  className?: string
}
```

### SegmentedControlContent

선택된 탭에 해당하는 콘텐츠를 표시합니다.

```tsx
interface SegmentedControlContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  value: string               // 이 콘텐츠가 표시될 탭의 값
  className?: string
}
```

## 스타일링

### 기본 스타일

- **SegmentedControlList**: `flex items-center bg-gray-5 rounded-2xl p-1 w-fit`
- **SegmentedControlItem**: 
  - 기본: `flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm cursor-pointer transition-colors bg-gray-5`
  - 활성: `bg-gray-0`

### 커스터마이징

```tsx
<SegmentedControlList className="bg-blue-100 p-2 rounded-lg">
  <SegmentedControlItem 
    value="tab1" 
    className="hover:bg-blue-200 text-blue-800"
  >
    커스텀 탭
  </SegmentedControlItem>
</SegmentedControlList>
```

## TypeScript 지원

타입 안전성을 위해 제네릭을 사용할 수 있습니다:

```tsx
type TabType = 'tab1' | 'tab2' | 'tab3'

const [selectedTab, setSelectedTab] = useState<TabType>('tab1')

return (
  <SegmentedControlRoot value={selectedTab} onValueChange={setSelectedTab}>
    <SegmentedControlList>
      <SegmentedControlItem value="tab1">탭 1</SegmentedControlItem>
      <SegmentedControlItem value="tab2">탭 2</SegmentedControlItem>
      <SegmentedControlItem value="tab3">탭 3</SegmentedControlItem>
    </SegmentedControlList>
    
    <SegmentedControlContent value="tab1">콘텐츠 1</SegmentedControlContent>
    <SegmentedControlContent value="tab2">콘텐츠 2</SegmentedControlContent>
    <SegmentedControlContent value="tab3">콘텐츠 3</SegmentedControlContent>
  </SegmentedControlRoot>
)
```

## 접근성

- 키보드 네비게이션 지원 (Tab, Arrow keys)
- ARIA 속성 자동 적용
- 스크린 리더 호환성
- 포커스 관리

## 제한사항

- `value` prop은 문자열 타입이어야 합니다
- `SegmentedControlContent`는 `SegmentedControlRoot` 내부에서만 사용할 수 있습니다
- 모든 `SegmentedControlItem`의 `value`는 고유해야 합니다

## 예시

### 동적 탭 생성

```tsx
const tabs = [
  { id: 'tab1', label: '첫 번째', content: '첫 번째 콘텐츠' },
  { id: 'tab2', label: '두 번째', content: '두 번째 콘텐츠' },
  { id: 'tab3', label: '세 번째', content: '세 번째 콘텐츠' },
]

export default function DynamicTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id)

  return (
    <SegmentedControlRoot value={selectedTab} onValueChange={setSelectedTab}>
      <SegmentedControlList>
        {tabs.map(tab => (
          <SegmentedControlItem key={tab.id} value={tab.id}>
            {tab.label}
          </SegmentedControlItem>
        ))}
      </SegmentedControlList>
      
      {tabs.map(tab => (
        <SegmentedControlContent key={tab.id} value={tab.id}>
          {tab.content}
        </SegmentedControlContent>
      ))}
    </SegmentedControlRoot>
  )
}
```

### 커스텀 이벤트 핸들링

```tsx
<SegmentedControlItem 
  value="tab1" 
  onClick={(e) => {
    e.preventDefault()
    console.log('Custom click handler')
  }}
>
  커스텀 탭
</SegmentedControlItem>
``` 