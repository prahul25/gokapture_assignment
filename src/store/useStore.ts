import { create } from "zustand";

type State = {
  undoStack: any[];
  redoStack: any[];
  selectedCells: any[];
  updateCellFormat: (cells: any[], format: any) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  // Add other state variables as needed
};

const useStore = create((set) => ({
    cells: Array(1000).fill(""),
    cellFormats: {},
    selectedCells: [],
    history: [],
    future: [],
    validationErrors: {},
    validationRules: {},
    searchQuery: "",
    currentPage: 1,  // Add this if not already present
    itemsPerPage: 40, // Set default items per page
    setSearchQuery: (query:string) => set({ searchQuery: query }),
    setCurrentPage: (page:number) => set({ currentPage: page }),
  

  updateCell: (index: any, value: any) =>
    set((state: any) => {
      const rule = state.validationRules[index];
      let isValid = true;
      let errorMessage = "";

      if (rule) {
        if (rule.type === "numeric" && isNaN(value)) {
          isValid = false;
          errorMessage = "Only numeric values are allowed";
        } else if (
          rule.type === "text" &&
          rule.pattern &&
          !new RegExp(rule.pattern).test(value)
        ) {
          isValid = false;
          errorMessage = `Text must match pattern: ${rule.pattern}`;
        }
      }

      const newValidationErrors = { ...state.validationErrors };

      if (isValid) {
        delete newValidationErrors[index]; // Clear error if valid
      } else {
        newValidationErrors[index] = errorMessage; // Set error message
      }

      const newCells = [...state.cells];
      state.history.push(state.cells);
      state.future = [];
      newCells[index] = value;

      return { cells: newCells, validationErrors: newValidationErrors };
    }),

  setValidationRule: (index: any, rule: any) =>
    set((state: any) => {
      const newValidationRules = { ...state.validationRules };
      newValidationRules[index] = rule;
      return { validationRules: newValidationRules };
    }),

  updateCellFormat: (indexes: any, format: any) =>
    set((state: any) => {
      const newCellFormats = { ...state.cellFormats };
      indexes.forEach((index: any) => {
        newCellFormats[index] = { ...newCellFormats[index], ...format };
      });
      return { cellFormats: newCellFormats };
    }),

  setSelectedCells: (indexes: any) => set(() => ({ selectedCells: indexes })),

  undo: () =>
    set((state: any) => {
      if (state.history.length > 0) {
        const previousState = state.history.pop();
        state.future.push(state.cells);
        return { cells: previousState };
      }
    }),

  redo: () =>
    set((state: any) => {
      if (state.future.length > 0) {
        const nextState = state.future.pop();
        state.history.push(state.cells);
        return { cells: nextState };
      }
    }),
}));

export default useStore;
