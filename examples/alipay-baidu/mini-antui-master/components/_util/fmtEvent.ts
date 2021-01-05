export default function fmtEvent(props, e) {
  const dataset = {};
  for (const key in props) {
    if ((/data-/gi).test(key)) {
      dataset[key.replace(/data-/gi, '')] = props[key];
    }
  }
  return Object.assign({}, e, {
    currentTarget: { dataset },
    target: { dataset, targetDataset: dataset },
  });
}
