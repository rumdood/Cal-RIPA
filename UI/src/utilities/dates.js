import differenceInHours from 'date-fns/differenceInHours'
import differenceInYears from 'date-fns/differenceInYears'
import { format } from 'date-fns'

export const formatDate = dateStr => {
  if (dateStr && dateStr.length > 0) {
    const str = dateStr.replace(/-/g, '')
    const year = str.substring(0, 4)
    const month = str.substring(4, 6)
    const day = str.substring(6, 8)
    return `${year}-${month}-${day}`
  }

  return ''
}

const parseDate = (dateStr, timeStr) => {
  return new Date(`${dateStr}T${timeStr}`)
}

export const dateNotInFuture = (dateStr, timeStr) => {
  const date = parseDate(dateStr, timeStr)
  return new Date().getTime() >= date.getTime()
}

export const difffernceInYears = date => {
  const diff = differenceInYears(new Date(), new Date(date))
  return diff
}

export const dateWithinLastHours = (dateStr, timeStr, hours) => {
  const date = parseDate(dateStr, timeStr)
  const diff = differenceInHours(new Date(), date)
  return diff < hours
}

export const formatDateTime = (dateStr, timeStr) => {
  return new Date(`${dateStr}T${timeStr}`)
}

export const uniqueId = () => {
  return format(new Date(), 'yyyyMMddkkmm')
}
