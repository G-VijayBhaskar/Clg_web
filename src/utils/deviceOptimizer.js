/**
 * Device Capability Detector & Performance Tier Classifier
 * Detects device hardware (CPU cores, memory, userAgent, screen size)
 * to automatically tune particle counts, canvas DPR, and animation loops.
 */
export function getDeviceTier() {
  if (typeof window === 'undefined') return 'high';

  const ua = navigator.userAgent || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || window.innerWidth < 768;

  if (!isMobile) {
    return 'high';
  }

  // Hardware capability checks (CPU cores & RAM)
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;

  if (cores <= 4 || memory <= 2) {
    return 'low';
  }

  return 'medium';
}

export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
}
