var ReactTools = Npm.require('react-tools');

function handler(compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: ReactTools.transform(source, {
      harmony: true
    })
  });
}

Plugin.registerSourceHandler("jsx", handler);
