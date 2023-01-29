import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCounterState = create<State & Actions>((set) => ({
  count: 0,
  decrement: (qty) => set((state) => ({ count: state.count - qty })),
  increment: (qty) => set((state) => ({ count: state.count + qty })),
}));
