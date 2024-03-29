
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[navicons] Deprecated script, please remove: ' + scriptElm.outerHTML];

  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('navicons');
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/navicons.esm.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-rindo-namespace', 'navicons');
  doc.head.appendChild(scriptElm);

  
  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/navicons.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-rindo-namespace', 'navicons');
  doc.head.appendChild(scriptElm)
  
  console.warn(warn.join('\n'));

})(document);
