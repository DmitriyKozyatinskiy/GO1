export function injectIcons() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  document.head.appendChild(link);
}

export function injectAnchorNode() {
  const anchor = document.createElement('div');
  anchor.id = 'go1-anchor';
  anchor.classList.add('go1-anchor');
  document.body.insertBefore(anchor, document.body.childNodes[0]);
  return anchor;
}

export function hasParentWithClass(element, className) {
  if (element.className && element.className.split(' ').indexOf(className) !== -1) {
    return true;
  } else {
    return element.parentNode && hasParentWithClass(element.parentNode, className);
  }
}

export function getSelectionText() {
  return window.getSelection().toString().trim();
}

export function getSelectionCoordinates(event) {
  return {
    top: event.screenY + window.scrollY,
    left: event.screenX + window.scrollX,
  };
}