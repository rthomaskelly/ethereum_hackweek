

const addressSubmitButton = document.getElementById('addressSubmit');

addressSubmitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const address = document.getElementById('addressInput').value;

  console.log("address: " + address);

  const formData = {
    address: address
  };

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  console.log("req body: " + JSON.stringify(options.body));

  let response = await fetch('/contractAddressSubmit', options);
  console.log(response.message);
});
