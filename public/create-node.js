var editor = null;
initalizeEditor();
function initalizeEditor() {
  editor = new tui.Editor({
    el: document.querySelector('#editSection'),
    previewStyle: 'vertical',
    height: '60vh',
    initialEditType: 'markdown'
  });
  console.log(editor);
}

function createNode() {
  const markdown = editor.getMarkdown();
  const viewer = new tui.Editor.factory({
    el: document.querySelector('#node-detail'),
    previewStyle: 'vertical',
    viewer: true,
    initialValue: markdown
  });
  console.log(markdown);
  console.log(viewer);
}
