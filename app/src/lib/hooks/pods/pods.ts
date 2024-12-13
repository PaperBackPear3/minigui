// src/lib/hooks.ts
import { writable } from 'svelte/store';
import { get } from '$lib/api';
import type { ApiResponse } from '$lib/apiTypes';
import type { Pod } from './types';

export function usePods() {
  const { subscribe, set } = writable<Pod[]>([]);
  const error = writable<string | null>(null);

  const fetchPods = async () => {
    try {
      const response: ApiResponse<Pod[]> = await get<Pod[]>('pods');
      if (response.data) {
        console.log(response.data)
        set(response.data);
      }
    } catch (err) {
      if (err instanceof Error) {
        error.set(err.message);
      } else {
        error.set('An unknown error occurred');
      }
    }
  };

  return {
    subscribe,
    fetchPods,
    error: error.subscribe,
  };
}
