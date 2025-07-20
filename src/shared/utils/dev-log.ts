const isDev = import.meta.env.MODE === 'development' // 현재 실행 중인 환경이 개발 모드인지 여부

type LogType = 'log' | 'error' // log = 일반 콘솔로그, error = 에러 로그

/**
 * 개발 환경에서만 로그를 출력하는 함수입니다.
 * @param type 로그의 유형, 기본값은 'log'이며, 'log' | 'error' 중 선택
 * @param message 출력할 메시지 또는 데이터
 * @param optionalParams 추가로 출력할 파라미터들, console.log처럼 여러 인자를 전달할 수 있습니다.
 *
 * @example
 * devLog('log', '디버그 메시지')
 * devLog('error', '에러 발생!', error)
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const devLog = (type: LogType = 'log', message?: string, ...optionalParams: any[]) => {
  if (isDev) {
    // 현재 환경이 개발모드일때만 출력
    if (type === 'log') {
      // eslint-disable-next-line no-console
      console.log('[DEV]', message, ...optionalParams)
    } else {
      console.error('[DEV][ERROR]', message, ...optionalParams)
    }
  }
}
