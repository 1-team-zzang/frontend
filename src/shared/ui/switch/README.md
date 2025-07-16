# Switch

Switch는 on/off 상태를 토글할 수 있는 UI 컴포넌트입니다. controlled와 uncontrolled 모드를 모두 지원하며, 접근성을 고려하여 설계되었습니다.

## 특징

- ✅ Controlled/Uncontrolled 모드 지원
- ✅ 접근성 고려 (ARIA 속성, 키보드 네비게이션)
- ✅ 커스터마이징 가능한 스타일링
- ✅ 부드러운 전환 애니메이션
- ✅ TypeScript 완전 지원

## 설치

```bash
# 이미 프로젝트에 포함되어 있음
import { Switch, SwitchTrigger } from '@/shared/ui/switch'
```

## 기본 사용법

### Controlled 모드

```tsx
import { useState } from 'react'
import { Switch, SwitchTrigger } from '@/shared/ui/switch'

export default function Example() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Switch checked={isChecked} onCheckedChange={setIsChecked}>
      <SwitchTrigger />
    </Switch>
  )
}
```

### Uncontrolled 모드

```tsx
import { Switch, SwitchTrigger } from '@/shared/ui/switch'

export default function Example() {
  return (
    <Switch defaultChecked={false}>
      <SwitchTrigger />
    </Switch>
  )
}
```

## 컴포넌트 API

### Switch

Switch의 최상위 컨테이너 컴포넌트입니다.

```tsx
interface SwitchProps {
  children: ReactNode
  checked?: boolean                    // 현재 상태 (controlled mode)
  defaultChecked?: boolean             // 기본 상태 (uncontrolled mode)
  onCheckedChange?: (checked: boolean) => void  // 상태 변경 콜백
}
```

### SwitchTrigger

실제 토글 버튼 컴포넌트입니다.

```tsx
interface SwitchTriggerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  switchBallClassName?: string         // 토글 볼 스타일 커스터마이징
  labelClassName?: string              // 라벨 컨테이너 스타일 커스터마이징
}
```

## 스타일링

### 기본 스타일

- **컨테이너**: `rounded-full bg-gray-100 p-1 w-12 h-8 flex items-center cursor-pointer`
- **토글 볼**: `w-5 h-5 rounded-full bg-gray-0 block transition-transform duration-200`
- **활성 상태**: `translate-x-full`
- **비활성 상태**: `translate-x-0`

### 커스터마이징

```tsx
<Switch>
  <SwitchTrigger 
    switchBallClassName="bg-blue-500"
    labelClassName="bg-gray-200"
  />
</Switch>
```

## 접근성

### ARIA 속성

- `role="switch"`: 스위치 역할 정의
- `aria-checked`: 현재 상태 표시
- `aria-label`: 접근성 라벨

### 키보드 지원

- **Enter 키**: 토글 상태 변경
- **Space 키**: 토글 상태 변경
- **Tab 키**: 포커스 이동

### 스크린 리더 지원

```tsx
// 상태별 라벨 제공
<Switch>
  <SwitchTrigger aria-label={isChecked ? '켜짐' : '꺼짐'} />
</Switch>
```

## 고급 사용법

### 커스텀 ID 설정

```tsx
<Switch>
  <SwitchTrigger id="notification-switch" />
</Switch>
```

### 이벤트 핸들링

```tsx
<Switch onCheckedChange={(checked) => {
  console.log('Switch 상태:', checked)
  // 추가 로직
}}>
  <SwitchTrigger />
</Switch>
```

### 조건부 렌더링

```tsx
{showSwitch && (
  <Switch>
    <SwitchTrigger />
  </Switch>
)}
```

## 테스트

### 테스트 실행

```bash
npm test switch.test.tsx
```

### 테스트 커버리지

- ✅ Controlled/Uncontrolled 모드 동작 검증
- ✅ 상태 변경 테스트
- ✅ 접근성 속성 검증
- ✅ 키보드 인터랙션 테스트

### 테스트 예시

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch, SwitchTrigger } from '@/shared/ui/switch'

describe('Switch', () => {
  it('상태 변경 테스트', async () => {
    const user = userEvent.setup()
    render(
      <Switch>
        <SwitchTrigger />
      </Switch>
    )

    const switchElement = screen.getByRole('switch')
    expect(switchElement).not.toBeChecked()

    await user.click(switchElement)
    expect(switchElement).toBeChecked()
  })
})
```

## 제한사항

- `SwitchTrigger`는 `Switch` 컴포넌트 내부에서만 사용할 수 있습니다
- `checked`와 `defaultChecked`는 동시에 사용할 수 없습니다
- 토글 볼의 크기는 현재 고정되어 있습니다 (w-5 h-5)

## 예시

### 알림 설정

```tsx
function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label>이메일 알림</label>
        <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications}>
          <SwitchTrigger />
        </Switch>
      </div>
      
      <div className="flex items-center justify-between">
        <label>푸시 알림</label>
        <Switch checked={pushNotifications} onCheckedChange={setPushNotifications}>
          <SwitchTrigger />
        </Switch>
      </div>
    </div>
  )
}
```

### 테마 설정

```tsx
function ThemeSettings() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <div>
        <h3>다크 모드</h3>
        <p className="text-sm text-gray-600">어두운 테마로 변경합니다</p>
      </div>
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode}>
        <SwitchTrigger 
          switchBallClassName="bg-blue-500"
          labelClassName="bg-gray-200"
        />
      </Switch>
    </div>
  )
}
```

## 파일 구조

src/shared/ui/switch/
├── index.ts # 컴포넌트 export
├── switch.tsx # 최상위 컨테이너
├── switch-context.tsx # 상태 관리 컨텍스트
├── switch-trigger.tsx # 토글 버튼
├── switch.test.tsx # 테스트 코드
└── README.md # 문서