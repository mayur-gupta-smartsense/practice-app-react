// store/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Instead of typing out useSelector<RootState> every time in every component,
// we make our own versions once here and reuse them everywhere
//export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>();