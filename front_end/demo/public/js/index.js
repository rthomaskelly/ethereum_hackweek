
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

  console.log("POST request body: " + JSON.stringify(options.body));


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
