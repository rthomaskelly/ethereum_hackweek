
$(function() {
  $('#contractTypeInbox').click(function() {
    $('.inbox-details').show();
    $('.pie-details').hide();
  });
  $('#contractTypePie').click(function() {
    $('.pie-details').show();
    $('.inbox-details').hide();
  });
});

const addressSubmitButton = document.getElementById('addressSubmit');

addressSubmitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const address = document.getElementById('addressInput').value;
  const contractType = document.querySelector('input[name="contractType"]:checked').value;

  const formData = {
    contractAddress: address,
    contractType: contractType,
  };

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  console.log("POST request body for contract addr: " + JSON.stringify(options.body));


  const res = await fetch('/contractAddressSubmit', options);
  const response = await res.json();
  if (response.status === 'Success') {
    console.log(response.redirect);
    window.location = response.redirect;
  } else {
    console.log('Request failed!');
    console.log(JSON.stringify(response));
  }
});

const inboxMessageSubmit = document.getElementById('inboxMessageSubmit');

inboxMessageSubmit.addEventListener("click", async (e) => {
  e.preventDefault();

  const inboxMessage = document.getElementById('inboxMessageInput').value;

  const formData = {
    inboxMessage: inboxMessage,
  };

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  console.log("POST request body for inbox message: " + JSON.stringify(options.body));

  const res = await fetch('/inboxMessageSubmit', options);
  const response = await res.json();
  if (response.status === 'Success') {
    console.log(response.redirect);
    window.location = response.redirect;
  } else {
    console.log('Request failed!');
    console.log(JSON.stringify(response));
  }
});

const orderPieSubmit = document.getElementById('orderPie');

orderPieSubmit.addEventListener("click", async (e) => {
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: '',
  };

  const res = await fetch('/orderPie', options);

  const response = await res.json();

  if (response.status === 'Success') {
    console.log(response.redirect);
    window.location = response.redirect;
  } else {
    console.log('Request failed!');
    console.log(JSON.stringify(response));
  }
});
