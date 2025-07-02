const form = document.getElementById('filter-form');
const resetBtn = document.getElementById('reset-filters');
const cards = document.querySelectorAll('.property-card');
const countDisplay = document.getElementById('results-count');

function updateResults() {
  const size = document.getElementById('plot-size').value;
  const type = document.getElementById('property-type').value;
  const budget = document.getElementById('budget').value;

  let visibleCount = 0;

  cards.forEach(card => {
    const matchesSize = !size || card.dataset.size === size;
    const matchesType = !type || card.dataset.type === type;
    const matchesBudget = !budget || card.dataset.budget === budget;

    if (matchesSize && matchesType && matchesBudget) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  countDisplay.textContent = visibleCount > 0
    ? `Showing ${visibleCount} properties`
    : 'No matching properties found';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  updateResults();
});

resetBtn.addEventListener('click', function () {
  form.reset();
  cards.forEach(card => card.style.display = 'block');
  countDisplay.textContent = 'Showing all properties';
});
