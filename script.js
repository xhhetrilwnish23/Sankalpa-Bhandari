 
 
// Modal open/close
function openPoem(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Unlock private section
const unlockBtn = document.getElementById('unlockBtn');
const unlockModal = document.getElementById('unlockModal');
const confirmUnlock = document.getElementById('confirmUnlock');
const codeInput = document.getElementById('codeInput');
const privateContent = document.getElementById('privateContent');

unlockBtn.addEventListener('click', () => {
  unlockModal.style.display = 'flex';
});

confirmUnlock.addEventListener('click', () => {
  const code = codeInput.value;
  if (code === '1019') {
    unlockModal.style.display = 'none';
    privateContent.classList.remove('hidden');
    alert('Private Projects Unlocked!');
  } else {
    alert('Incorrect Code!');
  }
  codeInput.value = '';
});