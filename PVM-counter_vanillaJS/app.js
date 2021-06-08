// variables
// DOM elements
// --- inputs
const inputWithoutPVM = document.querySelector('#input-without-pvm');
const inputWithPVM = document.querySelector('#input-with-pvm');
const selectOfPVM = document.querySelector('#pvm');
// --- outputs
const withoutPVMoutput = document.querySelector('#without-pvm-output');
const withPVMoutput = document.querySelector('#with-pvm-output');
const PVMoutput = document.querySelector('#pvm-output');
const errorMsg = document.querySelector('#error-msg');

// --- calculator logic elements
let currentPVM = 21;

// -----------------------------  functions   ------------------------

// //////////////////---kai pildomas be pvm input'as ---////////////////////////
const calculateWithoutPVMinput = () => {
  // error message
  if (isNaN(+inputWithoutPVM.value)) {
    errorMsg.innerText = 'Prašome su be PVM nurodyti tik skaičiais.';
    return;
  }
  errorMsg.innerText = '';
  //   disabling "suma su PVM" input
  if (inputWithoutPVM.value) {
    inputWithPVM.setAttribute('disabled', 'true');
  } else {
    inputWithPVM.removeAttribute('disabled');
  }
  // suma be PVM
  withoutPVMoutput.innerText = (+inputWithoutPVM.value).toFixed(2) + '€';
  //   suma su PVM
  withPVMoutput.innerText =
    (
      +inputWithoutPVM.value +
      +inputWithoutPVM.value * (currentPVM / 100)
    ).toFixed(2) + '€';

  // PVM
  PVMoutput.innerText =
    (+inputWithoutPVM.value * (currentPVM / 100)).toFixed(2) + '€';
};

// ////////////////////---kai pildomas su pvm input'as ---//////////////////////
const calculateWithPVMinput = () => {
  // error message
  if (isNaN(+inputWithPVM.value)) {
    errorMsg.innerText = 'Prašome su su PVM nurodyti tik skaičiais.';
    return;
  }
  errorMsg.innerText = '';

  //   disabling "suma su PVM" input
  if (inputWithPVM.value) {
    inputWithoutPVM.setAttribute('disabled', 'true');
  } else {
    inputWithoutPVM.removeAttribute('disabled');
  }

  // suma be PVM
  withoutPVMoutput.innerText =
    (+inputWithPVM.value / ((currentPVM + 100) / 100)).toFixed(2) + '€';
  //   suma su PVM
  withPVMoutput.innerText = (+inputWithPVM.value).toFixed(2) + '€';

  // PVM
  PVMoutput.innerText =
    (
      +inputWithPVM.value -
      +inputWithPVM.value / ((currentPVM + 100) / 100)
    ).toFixed(2) + '€';
};

// /////////////////////////---- PVM tarifo keitimas -------//////////////////////
const changeCurrentPVM = (e) => {
  currentPVM = +e.target.value;
  if (inputWithoutPVM.value) {
    calculateWithoutPVMinput();
  } else if (inputWithPVM.value) {
    calculateWithPVMinput();
  }
};

// ---------------------  events  ----------------------
// ///////////////////////////////////////////////

inputWithoutPVM.addEventListener('keyup', calculateWithoutPVMinput);
inputWithPVM.addEventListener('keyup', calculateWithPVMinput);

selectOfPVM.addEventListener('change', changeCurrentPVM);
