module.exports = {
  translate(load) {
    console.log(load.meta.format);
    return load.source;
  },
};
