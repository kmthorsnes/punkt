// Change version
const selectBox = document.getElementById('pkt-version-select');
selectBox.addEventListener('change', (event) => {
  window.location.href = `/${event.target.options[event.target.selectedIndex].value}/`;
});

function filterItems() {
  // Get the selected value from the filter and the input value from the search
  const selectedValue = document.getElementById('filter').value;
  const inputValue = document.getElementById('search').value.toLowerCase();

  // Get the list items
  const listItems = document.querySelectorAll('#filearea li');

  // Iterate over the list items and show/hide them based on the filter and search criteria
  listItems.forEach(function (listItem) {
    const listItemFilename = listItem.getAttribute('data-filename').toLowerCase();

    const matchesCategory = selectedValue === 'all' || listItem.classList.contains(selectedValue);
    const matchesSearch = !inputValue || listItemFilename.includes(inputValue);

    if (matchesCategory && matchesSearch) {
      // Show items that match both filter and search criteria
      listItem.classList.remove('filtered-out');
    } else {
      // Hide other items
      listItem.classList.add('filtered-out');
    }
  });
}

// Add event listeners for both filter and search input
document.getElementById('filter').addEventListener('change', filterItems);
document.getElementById('search').addEventListener('input', filterItems);

// Copy filepaths to clipboard
document.addEventListener('click', async function (event) {
  // Find the closest element with the 'file__tool' class
  const button = event.target.closest('.file__tool');

  // Check if the clicked element has the 'file__tool' class
  if (button) {
    // Get the 'data-clipboard-text' attribute value
    const clipboardText = button.getAttribute('data-clipboard-text');
  
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.value = clipboardText;

    // Add the textarea to the DOM, select its content, and copy it to the clipboard
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Optional: Provide feedback (e.g., change the button text to "Copied!")
    button.innerText = 'Kopiert!';
  }
});
