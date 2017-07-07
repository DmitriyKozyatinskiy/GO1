export function generateNewID(state) {
  const ids = state.map(item => {
    return item.get('id');
  });
  if (!ids || !ids.size) {
    return 0;
  }
  return ids.max() + 1;
}
