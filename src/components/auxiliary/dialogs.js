import $ from "jquery";

const MODAL_DIALOG_ID = "uiDialog-modal";
const MODAL_BUTTON_CLOSE_MARKUP =
  '<button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>';
const CENTERED_MODAL_MARKUP = `
<div class="modal fade" id="${MODAL_DIALOG_ID}" tabindex="-1" role="dialog" aria-labelledby="modalCenteredTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
      </div>
    </div>
  </div>
</div>
`;

const uiDialog = function (title, markup, buttons, options) {
  let $dialog = $(`#${MODAL_DIALOG_ID}`);
  $dialog.find(".modal-title").text(title);
  $dialog.find(".modal-body").html(markup);
  //always add close button
  if (buttons) {
    buttons += MODAL_BUTTON_CLOSE_MARKUP;
  } else {
    buttons = MODAL_BUTTON_CLOSE_MARKUP;
  }
  $dialog.find(".modal-footer").html(buttons);
  $dialog.modal(options);
};

const checkDialogMarkup = () => {
  return (
    $(`#${MODAL_DIALOG_ID}`).length === 1 &&
    $(`#${MODAL_DIALOG_ID} .modal-title`).length === 1 &&
    $(`#${MODAL_DIALOG_ID} .modal-body`).length === 1 &&
    $(`#${MODAL_DIALOG_ID} .modal-footer`).length === 1
  );
};

export {
  MODAL_DIALOG_ID,
  MODAL_BUTTON_CLOSE_MARKUP,
  CENTERED_MODAL_MARKUP,
  uiDialog,
  checkDialogMarkup
};
