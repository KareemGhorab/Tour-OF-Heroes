import { create } from 'zustand'
let cur = 1

const useLogs = create<{
	logs: { id: number; log: string }[]
	add: (log: string) => void
	reset: () => void
}>((set) => ({
	logs: [],
	add: (log: string) =>
		set((state) => ({ logs: [...state.logs, { id: cur++, log }] })),
	reset: () => set({ logs: [] }),
}))

export default useLogs
