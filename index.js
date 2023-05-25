fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const chartContainer = document.querySelector('.card__charts');
    let totalAmount = 0;


    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

    data.forEach(item => {
      const listItem = document.createElement('li');
      const bar = document.createElement('div');
      const label = document.createElement('p');
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      listItem.classList.add('card__chart');
      bar.classList.add('bar');
      label.textContent = item.day;

      if (item.day === currentDay) {
        bar.classList.add('current-day');
      }

      bar.style.height = item.amount * 2 + 'px';
      listItem.appendChild(bar);
      listItem.appendChild(label);
      listItem.appendChild(tooltip);
      totalAmount += item.amount;
      // Event listeners for tooltip
      listItem.addEventListener('mouseover', () => {
        tooltip.textContent = item.amount;
        tooltip.style.bottom = (item.amount * 2 + 36) + 'px';
        console.log('$' + item.amount);
        tooltip.style.display = 'block';
      });

      listItem.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
      });

      chartContainer.appendChild(listItem);
    });
    console.log('Total amount:', totalAmount);
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
