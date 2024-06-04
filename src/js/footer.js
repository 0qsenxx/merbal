import { alert, defaultModules, success } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});

const url = `https://energyflow.b.goit.study/api/subscription`;
const formUsers = document.querySelector('.footer__form');
// console.log(url)

function addUsers(newUsers) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUsers),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(data => {
        success({
            title: 'Success!',
            text: data.message,
        })
      console.log(data);
    })
    .catch(error => console.log(error));
}

formUsers.addEventListener('submit', e => {
  e.preventDefault();
  if (
    e.target.elements.email.value.includes('@') === false ||
    e.target.elements.email.value.includes('.') === false ||
    e.target.elements.email.value[e.target.elements.email.value.length - 1] ===
      '.'
  ) {
    e.target.elements.email.classList.add('rating-error-input');
    return;
  } else {
    e.target.elements.email.classList.remove('rating-error-input');
  }
  const newUsers = {
    email: e.currentTarget.elements.email.value,
  };
  console.log(newUsers);
  addUsers(newUsers);
  e.currentTarget.reset();
});
