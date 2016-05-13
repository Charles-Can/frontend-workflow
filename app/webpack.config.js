module.exports={
  /*
  [entry]: declare our in file and out file
  the key name in entries is the output name and the value
  corrresponds to source file
  */
  entry: {
    'index' : './src/index.js',
  },

  /*
  [output]: output specifies where we will compile our code to. These
  are often referred to as bundles. We'll be using a relative path to
  output to the public/js/ folder.

  Notice the [name] webpack will look at this and replace it with the name
  attribute from the entries.
  */
  output: {
    filename: '../public/js/[name].bundle.js',
  },

};
