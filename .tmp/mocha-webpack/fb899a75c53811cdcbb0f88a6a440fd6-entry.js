
    var testsContext = require.context("../../test/unit", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    