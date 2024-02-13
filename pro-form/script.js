/// @ts-check
"use strict";

/** @type {HTMLFormElement?} */
const form = document.querySelector('#pro-form');

/** @type {HTMLInputElement?} */
const formName = document.querySelector('#pro-form #form-name');

/** @type {HTMLInputElement?} */
const phNo = document.querySelector('#pro-form #form-ph-no');


const cloudFuncLink = 'https://us-central1-your-photos-dev.cloudfunctions.net/addLead';


const invalidForm = [false, false];

formName?.addEventListener('change', ev => {
    if (!ev.target) return;

    /** @type {string} */
    /// @ts-expect-error
    const val = ev.target.value;

    /** @type {HTMLDivElement?} */
    const err = document.querySelector('#name-err');
    if (!err) return;

    invalidForm[0] = !val.match(/^[a-zA-Z\s\-]+$/);
    err.style.display = invalidForm[0] ? 'block' : 'none';
});

phNo?.addEventListener('change', ev => {
    if (!ev.target) return;

    /** @type {string} */
    /// @ts-expect-error
    const val = ev.target.value;

    /** @type {HTMLDivElement?} */
    const err = document.querySelector('#ph-no-err');
    if (!err) return;

    invalidForm[1] = !val.match(/^[\s\d+\-]+$/);
    err.style.display = invalidForm[1] ? 'block' : 'none';
});

form?.addEventListener('submit', ev => {
    ev.preventDefault();

    /** @type {HTMLDivElement?} */
    const err = document.querySelector('#submit-err');
    if (!err) return;

    if (invalidForm.some(v => v)) {
        err.style.display = 'block';
        err.innerText = "Fix all the errors.";
        return;
    }

    err.style.display = 'none';

    const formData = new FormData(form);

    /** @type {(string | null)[]} */
    const [personName, phoneNo] = [
        /// @ts-expect-error
        formData.get('form_name'),
        /// @ts-expect-error
        formData.get('form_ph_no'),
    ];

    if (! (personName && phoneNo)) {
        console.error("State error: Somehow either of the fields are missing!");
        return;
    }

    /** @type {HTMLButtonElement?} */
    const submitBtn = document.querySelector("#submit-btn");

    /// @ts-expect-error
    submitBtn.disabled = true;

    fetch(cloudFuncLink, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ personName, phoneNo }),
    }).then(() => {
        form?.reset();
        alert('Saved your details!');
        window.history.back();
    });
});
