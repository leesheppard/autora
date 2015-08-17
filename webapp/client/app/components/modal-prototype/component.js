import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

export default ModalDialog.extend({
  containerClassNames: "modal-prototype",
  hasOverlay: true,
  // renderInPlace: true,
  alignment: 'none',
  translucentOverlay: true,
  close: 'toggleCreateProjectModal'
});
