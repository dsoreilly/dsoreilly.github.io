document.addEventListener('DOMContentLoaded', () => {
  const biography = document.getElementById('biography');
  const heading = document.getElementById('title');
  const logo = document.getElementById('logo');
  
  biography.style.display = 'none';

  logo.addEventListener('mouseenter', () => biography.style.display = 'block' );
  logo.addEventListener('mouseleave', () => biography.style.display = 'none');

  heading.innerText = heading.innerText.replace(/ /g, '_');
  heading.innerText = heading.innerText.replace(/\'/g, '/');
  heading.addEventListener('mouseenter', () => {
    heading.innerText = heading.innerText.replace(/\//g, '\\');
    biography.style.display = 'block';
  });
  heading.addEventListener('mouseleave', () => {
    heading.innerText = heading.innerText.replace(/\\/g, '/');
    biography.style.display = 'none';
  });
});