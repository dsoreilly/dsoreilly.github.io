document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('title');
  const logo = document.getElementById('logo');
  const paragraph = document.getElementById('paragraph');
  heading.innerText = heading.innerText.replace(/\'/g, '/');
  paragraph.style.display = 'none';
  logo.addEventListener('mouseenter', () => paragraph.style.display = 'block' );
  logo.addEventListener('mouseleave', () => paragraph.style.display = 'none');
  heading.addEventListener('mouseenter', () => {
    heading.innerText = heading.innerText.replace(/\//g, '\\');
    paragraph.style.display = 'block';
  });
  heading.addEventListener('mouseleave', () => {
    heading.innerText = heading.innerText.replace(/\\/g, '/');
    paragraph.style.display = 'none';
  });
});