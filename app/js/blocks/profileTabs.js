// Переключение по табам в личном кабинете (profile.html)

const $tabs = $('.profile__tab');
const $profiles = $('.profile__block');

const deactivateTabs = () => $tabs.removeClass('profile__tab--is-active');
const activateTab = tab => $(tab).addClass('profile__tab--is-active');

const hideProfiles = () => $profiles.hide();
const showProfile = type => $(`.profile__block--${type}`).show();

$tabs.on('click', function onProfileTabClick() {
  deactivateTabs();
  hideProfiles();

  activateTab(this);
  showProfile(this.dataset.profile);
});

export default { deactivateTabs, activateTab, hideProfiles, showProfile };
