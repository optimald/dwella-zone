import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount / 100) // Convert from cents
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date))
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getDeviceStatusColor(status: string): string {
  switch (status) {
    case 'online':
      return 'text-green-600 bg-green-100'
    case 'offline':
      return 'text-red-600 bg-red-100'
    case 'maintenance':
      return 'text-yellow-600 bg-yellow-100'
    case 'error':
      return 'text-red-600 bg-red-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'low':
      return 'text-blue-600 bg-blue-100'
    case 'medium':
      return 'text-yellow-600 bg-yellow-100'
    case 'high':
      return 'text-orange-600 bg-orange-100'
    case 'urgent':
      return 'text-red-600 bg-red-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'active':
    case 'online':
    case 'confirmed':
    case 'completed':
    case 'resolved':
      return 'text-green-600 bg-green-100'
    case 'inactive':
    case 'offline':
    case 'cancelled':
    case 'closed':
      return 'text-gray-600 bg-gray-100'
    case 'pending':
    case 'scheduled':
    case 'in_progress':
      return 'text-blue-600 bg-blue-100'
    case 'suspended':
    case 'error':
    case 'urgent':
      return 'text-red-600 bg-red-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
} 