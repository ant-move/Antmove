export default function classnames(dir, wrap, justify, align, alignContent) {
  const prefixCls = 'am-flexbox';
  const classes = [];

  const dirMaps = {
    row: `${prefixCls}-dir-row`,
    'row-reverse': `${prefixCls}-dir-row-reverse`,
    column: `${prefixCls}-dir-column`,
    'column-reverse': `${prefixCls}-dir-column-reverse`,
  };

  const wrapMaps = {
    nowrap: `${prefixCls}-nowrap`,
    wrap: `${prefixCls}-wrap`,
    'wrap-reverse': `${prefixCls}-wrap-reverse`,
  };

  const justifyMaps = {
    start: `${prefixCls}-justify-start`,
    end: `${prefixCls}-justify-end`,
    center: `${prefixCls}-justify-center`,
    between: `${prefixCls}-justify-between`,
    around: `${prefixCls}-justify-around`,
  };

  const alignMaps = {
    start: `${prefixCls}-align-start`,
    center: `${prefixCls}-align-center`,
    end: `${prefixCls}-align-end`,
    baseline: `${prefixCls}-align-baseline`,
    stretch: `${prefixCls}-align-stretch`,
  };

  const alignContentMaps = {
    start: `${prefixCls}-align-content-start`,
    end: `${prefixCls}-align-content-end`,
    center: `${prefixCls}-align-content-center`,
    between: `${prefixCls}-align-content-between`,
    around: `${prefixCls}-align-content-around`,
    stretch: `${prefixCls}-align-content-stretch`,
  };

  if (dirMaps[dir]) {
    classes.push(dirMaps[dir]);
  }

  if (wrapMaps[wrap]) {
    classes.push(wrapMaps[wrap]);
  }

  if (justifyMaps[justify]) {
    classes.push(justifyMaps[justify]);
  }

  if (alignMaps[align]) {
    classes.push(alignMaps[align]);
  }

  if (alignContentMaps[alignContent]) {
    classes.push(alignContentMaps[alignContent]);
  }

  return classes.join(' ');
}
