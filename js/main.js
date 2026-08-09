/*
  VERVE 官网 JavaScript
  - 手机菜单：由下方第一段代码控制。
  - 表单：目前不会把资料上传到服务器；提交后会打开访客的邮件程序。
  - 若以后接入真正的表单服务，只需要替换 submit 事件中的代码。
*/
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(opened));
    });
  }

  document.querySelectorAll('.quote-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [];
      data.forEach((value, key) => lines.push(`${key}: ${value}`));
      window.location.href = `mailto:info@vervecleaningsolutions.com?subject=${encodeURIComponent('Website quote request')}&body=${encodeURIComponent(lines.join('\n'))}`;
      const notice = form.querySelector('.notice');
      if (notice) notice.style.display = 'block';
    });
  });
});
