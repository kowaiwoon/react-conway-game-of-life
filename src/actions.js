const RESET_BOARD = 'RESET_BOARD';
const RESIZE_BOARD = 'RESIZE_BOARD';
const PLAY = 'PLAY';
const PAUSE = 'PAUSE';
const STEP = 'STEP';
const TOGGLE_CELL_START_VALUE = 'TOGGLE_CELL_START_VALUE';

export const actionTypes = {
  RESET_BOARD,
  RESIZE_BOARD,
  PLAY,
  PAUSE,
  STEP,
  TOGGLE_CELL_START_VALUE
};

export function resetBoard(width, height) {
  return {
    type: RESET_BOARD
  };
}

export function resizeBoard(width, height) {
  return {
    type: RESIZE_BOARD,
    width,
    height
  };
}

export function play() {
  return {
    type: PLAY
  };
}

export function pause() {
  return {
    type: PAUSE
  };
}

export function step() {
  return {
    type: STEP
  };
}

export function toggleCellStartValue(r, c) {
  return {
    type: TOGGLE_CELL_START_VALUE,
    r,
    c
  };
}
