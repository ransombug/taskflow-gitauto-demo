/**
 * Display helpers for task fields.
 */

/**
 * @param {string} priority
 * @returns {string}
 */
export function formatPriority(priority) {
  if (!priority) {
    return 'Unknown'
  }

  return priority.charAt(0).toUpperCase() + priority.slice(1)
}

/**
 * @param {string} status
 * @returns {string}
 */
export function formatStatus(status) {
  if (status === 'completed') {
    return 'Completed'
  }

  if (status === 'active') {
    return 'Active'
  }

  return status || 'Unknown'
}

/**
 * @param {number} value
 * @returns {string}
 */
export function formatPercentage(value) {
  return `${Math.round(value)}%`
}

/**
 * @param {number} count
 * @param {string} singular
 * @param {string} [plural]
 * @returns {string}
 */
export function pluralize(count, singular, plural) {
  if (count === 1) {
    return `${count} ${singular}`
  }

  return `${count} ${plural || `${singular}s`}`
}
