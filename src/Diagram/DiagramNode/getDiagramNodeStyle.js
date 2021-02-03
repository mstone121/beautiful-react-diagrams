const getDiagramNodeCursor = (disableDrag) => {
  switch (disableDrag) {
    case 'x': return 'ns-resize';
    case 'y': return 'ew-resize';
    case true: return undefined;
    default: return 'move';
  }
};

const getDiagramNodeStyle = (coordinates, disableDrag) => ({
  left: coordinates[0],
  top: coordinates[1],
  cursor: getDiagramNodeCursor(disableDrag),
});

export default getDiagramNodeStyle;
