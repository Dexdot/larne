// Последний этап чекаута

import tabs from './checkoutTabs';

// Клик по карандашу
const $editDelivery = $('.confirm__edit--delivery');
const $editPayment = $('.confirm__edit--payment');

$editDelivery.on('click', () => {
  tabs.hideForms();
  tabs.deactivateTabs();
  tabs.activateTab('delivery');
  tabs.showForm('delivery');
});

$editPayment.on('click', () => {
  tabs.hideForms();
  tabs.deactivateTabs();
  tabs.activateTab('payment');
  tabs.showForm('payment');
});
