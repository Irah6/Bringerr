/// @ts-check
"use strict";

/** @type {HTMLFormElement?} */
const form = document.querySelector('#pro-form');

/** @type {HTMLInputElement?} */
const formName = document.querySelector('#pro-form #form-name');

/** @type {HTMLInputElement?} */
const phNo = document.querySelector('#pro-form #form-ph-no');

const crmAPIBase = "https://bringer.pipedrive.com/api";
const crmKey = "da05672bc13ef423dcc2f86478597e3ce40a46fe";
const freshLeadId = "902ef5d0-b54d-11ee-923c-759d3bebf455";

const invalidForm = [false, false];

/**
 * @param {string} personName
 * @param {string} phoneNo
 * @returns {Promise<number?>} person_id
 */
async function crmAPIAddPerson(personName, phoneNo) {
    const params = (new URLSearchParams({api_token: crmKey})).toString();
    const reqURL = `${crmAPIBase}/v1/persons?${params}`;

    const reply = await fetch(reqURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "name": personName,
            phone: [{ value: phoneNo }],
        }),
    });

    if (reply.status === 201) {
        /** @type {Record<string, any>} */
        const resp = await reply.json();
        if (resp['success']) {
            return resp['data']['id'];
        } else {
            return null;
        }
    }
    return null;
}

/**
 * @param {string} personName
 * @param {number} personId
 */
async function crmAPIAddLead(personName, personId) {
    const params = (new URLSearchParams({api_token: crmKey})).toString();
    const reqURL = `${crmAPIBase}/v1/leads?${params}`;

    return await fetch(reqURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: `${personName} lead`,
            label_ids: [freshLeadId],
            person_id: personId,
        }),
    });
}

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
    const [userName, userPhNo] = [
        /// @ts-expect-error
        formData.get('form_name'),
        /// @ts-expect-error
        formData.get('form_ph_no'),
    ];

    if (! (userName && userPhNo)) {
        console.error("State error: Somehow either of the fields are missing!");
        return;
    }

    /** @type {HTMLButtonElement?} */
    const submitBtn = document.querySelector("#submit-btn");

    /// @ts-expect-error
    submitBtn.disabled = true;

    crmAPIAddPerson(userName, userPhNo)
        .then(personId => {
            if (personId === null) {
                err.style.display = 'block';
                err.innerText = "Cannot add person to server.";
                return;
            }

            return crmAPIAddLead(userName, personId);
        })
        .then(() => {
            form?.reset();
            alert('Saved your details!');
            window.history.back();
        });
});
