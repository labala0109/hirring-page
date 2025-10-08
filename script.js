fetch('jobs.json')
  .then(res => res.json())
  .then(jobs => {
    const container = document.getElementById('job-listings');
    jobs.forEach(job => {
      const card = document.createElement('div');
      card.className = 'job-card';
      card.innerHTML = `
        <h2>${job.title}</h2>
        <p>${job.description}</p>
        <a href="apply.html?role=${encodeURIComponent(job.title)}">Apply Now</a>
      `;
      container.appendChild(card);
    });
  });
