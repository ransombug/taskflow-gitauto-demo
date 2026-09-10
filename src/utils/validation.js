const ALLOWED_PRIORITIES = ['low', 'medium', 'high']

/**
 * Returns true when a value is empty or only whitespace.
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isBlank(value) {
  return !value || value.trim() === ''
}

/**
 * Returns true when the priority is one of the supported values.
 *
 * @param {string} priority
 * @returns {boolean}
 */
export function isValidPriority(priority) {
  return ALLOWED_PRIORITIES.includes(priority)
}

/**
 * Validate a task before it is created.
 *
 * @param {{ title?: string, priority?: string } | null} task
 * @returns {{ valid: boolean, error: string | null }}
 */
export function validateTask(task) {
  if (!task) {
    return { valid: false, error: 'Task is required' }
  }

  if (!task.title) {
    return { valid: false, error: 'Title is required' }
  }

  if (!task.priority) {
    return { valid: false, error: 'Priority is required' }
  }

  return { valid: true, error: null }
}

/**
 * Basic length check used by older form code.
 *
 * @param {string} title
 * @returns {boolean}
 */
export function isTitleTooLong(title) {
  return Boolean(title && title.length > 120)
}
