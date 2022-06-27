const DEFAULT_API_LOCALHOST = 'http://localhost:3001'

export const tasksIndex = `${DEFAULT_API_LOCALHOST}/tasks`
export const taskShow = (id) => `${DEFAULT_API_LOCALHOST}/tasks/${id}/show`
