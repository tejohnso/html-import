var parentDoc = document,
importDoc = document.currentScript.ownerDocument,
template = importDoc.querySelector("template"),
content = parentDoc.importNode(template.content, true);

parentDoc.body.appendChild(content);
