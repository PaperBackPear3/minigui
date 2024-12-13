// src/lib/api.ts
import type { ApiResponse } from './apiTypes';
import { API_URL } from './config';

/**
 * Generic function to handle API responses
 */
async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
  }
  const data: T = await response.json();
  return { data };
}

/**
 * GET request
 */
export async function get<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}/${endpoint}`);
  return handleResponse<T>(response);
}

/**
 * POST request
 */
export async function post<T, U>(endpoint: string, payload: T): Promise<ApiResponse<U>> {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return handleResponse<U>(response);
}
