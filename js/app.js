var editor = new EpicEditor({
  autogrow: true,
  clientSideStorage: true,
  localStorageName: 'epiceditor',
  theme: {
    preview: '/themes/preview/preview-dark2.css',
  },
});
editor.load(function() {
	editor.preview();
});