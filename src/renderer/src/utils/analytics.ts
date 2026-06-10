/**
 * Analytics — SI Agent white-label overlay
 * PostHog is fully neutralized: init never runs, no events are sent to
 * third parties. All exported functions are no-ops retained for API
 * compatibility with callers that have not been refactored yet.
 *
 * Original upstream code imported posthog-js and conditionally initialised
 * it when VITE_POSTHOG_KEY was present. For the SI Agent build the key is
 * never set, and this stub ensures the import of posthog-js itself is
 * also dead-code eliminated by Vite.
 */

export function initAnalytics(): void {
  // No-op: PostHog disabled in SI Agent.
}

export function capture(
  _event: string,
  _properties?: Record<string, unknown>,
): void {
  // No-op: PostHog disabled.
}

export function captureScreenView(_screen: string): void {
  // No-op: PostHog disabled.
}

export function captureFeatureUsage(
  _feature: string,
  _details?: Record<string, unknown>,
): void {
  // No-op: PostHog disabled.
}

export function getAnalyticsConsent(): boolean {
  return false;
}

export function setAnalyticsConsent(_enabled: boolean): void {
  // No-op: PostHog disabled.
}

export function resetAnalytics(): void {
  // No-op: PostHog disabled.
}
