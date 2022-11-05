import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../state';
export const getThemeMode = createSelector(
  (state: RootState) => state,
  state => state.themeMode,
);
