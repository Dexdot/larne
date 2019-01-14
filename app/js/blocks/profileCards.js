// import tabs from './profileTabs';
import './profileTabs';
import scroll from './stopScroll';

const hideForms = () => {
  scroll.enable();
  $('.profile-form').removeClass('profile-form--is-visible');
};

const showForm = type => {
  scroll.disable();
  $(`.profile__block--${type} .profile-form`).addClass(
    'profile-form--is-visible'
  );
};

const showFormExt = (type, id) => {
  scroll.disable();
  $(`.profile__block--${type} .profile-form[data-form=${id}]`).addClass(
    'profile-form--is-visible'
  );
};

// Открытие форм
const $tabs = $('.profile__container [data-profile]');
$tabs.on('click', function onProfileCardClick() {
  hideForms();
  const type = this.dataset.profile;

  if (type === 'delivery' || type === 'orders') {
    const { id } = this;
    showFormExt(type, id);
  } else {
    showForm(type);
  }
});

// Закрытие форм
const $closeBtn = $('.profile-form__overlay, .profile-form__close');
$closeBtn.on('click', hideForms);
