// storage/waterstorage.ts
import { create } from "zustand";

type WaterStore = {
  goal: number; // Dagligt mål (t.ex. 2000ml)
  water: number; // Hur mycket som är kvar att dricka idag
  setGoal: (goal: number) => void;
  logWater: (amount: number) => void; // Tar bort från `water`
  resetWater: () => void;
};

export const useWaterStore = create<WaterStore>((set, get) => ({
  goal: 0,
  water: 0,
  setGoal: (goal) => set(() => ({ goal, water: goal })),
  logWater: (amount) =>
    set((state) => {
      const newWater = Math.max(state.water - amount, 0);
      return { water: newWater };
    }),
  resetWater: () => set((state) => ({ water: state.goal })),
}));
