import type { FailureResponse } from '@/service/fetchMeaning'

export function isFailureResponse(
  response: unknown
): response is FailureResponse {
  return (
    typeof response === 'object' &&
    response !== null &&
    'title' in response &&
    typeof response.title === 'string' &&
    'message' in response &&
    typeof response.message === 'string' &&
    'resolution' in response &&
    typeof response.resolution === 'string'
  )
}
