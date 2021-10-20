let state = {
    'day': 'day-1',
    'type': 'virtual'
}

const markSelectedCheckbox = (fieldName) => {
    [].forEach.call(document.querySelectorAll(`[name=${fieldName}]`), function(input) {
        input.parentElement.classList.toggle('checked');
    })
};

const setState = (key, value) => {
    state[key] = value;
    onUpdateState(state)
}

const setInitialState = (value) => {
    state = value;
    onUpdateState(state);
}

const onUpdateState = (state) => {
    const items = [].slice.call(document.querySelectorAll('[data-filter]'));
    /*
        1. e = sconde todos os items
        2. x = filtra por dia
        3. y = x filtrado por tipo
        4. m = mostra itens resultantes
     */
    items
        .map(e => {
            e.classList.add("d-none");
            return e;
        })
        .filter(x => x.dataset.filterDay.includes(state.day))
        .filter(y => y.dataset.filterType.includes(state.type))
        .map(m => {
            m.classList.remove("d-none");
            return m;
        });
}

const $checkboxDay = document.querySelectorAll('[name=checkbox-day]');
[].forEach.call($checkboxDay, function(checkbox) {
    checkbox.addEventListener("change", function(evt) {
        markSelectedCheckbox('checkbox-day')
        setState('day', this.value);
    });
});

const $checkboxType = document.querySelectorAll('[name=checkbox-type]');
[].forEach.call($checkboxType, function(checkbox) {
    checkbox.addEventListener("change", function(evt) {
        markSelectedCheckbox('checkbox-type')
        setState('type', this.value);
    });
});

setInitialState({
    'day': 'day-1',
    'type': 'virtual'
});