"use strict";

var state = {
  'day': 'day-1',
  'type': 'virtual'
};

var markSelectedCheckbox = function markSelectedCheckbox(fieldName) {
  [].forEach.call(document.querySelectorAll("[name=".concat(fieldName, "]")), function (input) {
    input.parentElement.classList.toggle('checked');
  });
};

var setState = function setState(key, value) {
  state[key] = value;
  onUpdateState(state);
};

var setInitialState = function setInitialState(value) {
  state = value;
  onUpdateState(state);
};

var onUpdateState = function onUpdateState(state) {
  var items = [].slice.call(document.querySelectorAll('[data-filter]'));
  /*
      1. e = sconde todos os items
      2. x = filtra por dia
      3. y = x filtrado por tipo
      4. m = mostra itens resultantes
   */

  items.map(function (e) {
    e.classList.add("d-none");
    return e;
  }).filter(function (x) {
    return x.dataset.filterDay.includes(state.day);
  }).filter(function (y) {
    return y.dataset.filterType.includes(state.type);
  }).map(function (m) {
    m.classList.remove("d-none");
    return m;
  });
};

var $checkboxDay = document.querySelectorAll('[name=checkbox-day]');
[].forEach.call($checkboxDay, function (checkbox) {
  checkbox.addEventListener("change", function (evt) {
    markSelectedCheckbox('checkbox-day');
    setState('day', this.value);
  });
});
var $checkboxType = document.querySelectorAll('[name=checkbox-type]');
[].forEach.call($checkboxType, function (checkbox) {
  checkbox.addEventListener("change", function (evt) {
    markSelectedCheckbox('checkbox-type');
    setState('type', this.value);
  });
});
setInitialState({
  'day': 'day-1',
  'type': 'virtual'
});