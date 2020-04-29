function unique(arr) {
  return Array.from(new Set(arr));
}

function sanitize(arr) {
  return arr.join(',').replace(/#/g, '-');
}

const chordsToData = (chords, input = null) => {
  const array = unique(chords);

  return {
    array,
    value: array.join(' '),
    sanitized: sanitize(array),
    input: input || array.join(' ')
  };
};

export const inputToData = (chordInput) => {
  const chords = chordInput.trim()
    .replace(/,/g, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((a) => a.trim())
    .filter((a) => !!a);

  return chordsToData(chords, chordInput);
};

export const urlToData = (urlString) => {
  const chords = urlString.replace(/-/gi, '#').split(',')
    .filter((a) => !!a);

  return chordsToData(chords);
};

export const urlParts = (hash = document.location.hash) => {
  const match = hash.match(/^#\/([a-z]+)\/([^/]+)$/) || [];

  return {
    instrument: match[1] || 'ukulele',
    chords: match[2] || ''
  };
};

// eslint-disable-next-line no-empty-function
export const noop = () => {};
