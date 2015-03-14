/**
 * Adapted from https://github.com/doctyper/reflexie/
 * @copyright Richard Herrera <rich@doctyper.com>
 * @license MIT
 */

var prefixes = 'webkit moz o ms'.split(' ');
var dummy = document.createElement('flx');
var bclss = document.body.className;
var i, j, p;

var typeTest = function (prop) {
  return typeof dummy.style[prop] !== 'undefined';
};

var testProp = function (prop) {
  var propSupport = typeTest(prop);
  if (!propSupport) {
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (i = 0, j = prefixes.length; i < j; i++) {
      p = prefixes[i] + prop;
      propSupport = typeTest(p);
      if (propSupport) {
        break;
      }
    }
  }
  return propSupport;
};

if (testProp('flexWrap')) {
  document.body.className = (bclss ? ' ' : '') + 'got-flex-box';
}
