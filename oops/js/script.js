const tableBody = document.getElementById("tableBody");

const object = [
  {
    userName: "Ali",
    company: "smit",
    phoneNo: "123",
    address: "saylani mass it training",
  },
  {
    userName: "Raheel",
    company: "smit",
    phoneNo: "456",
    address: "saylani mass it training institute",
  },
  {
    userName: "Zain",
    company: "smit",
    phoneNo: "789",
    address: "saylani mass it training center",
  },
];

function toggleAddress(index) {
  const span = document.getElementById(`addr-${index}`);
  span.innerHTML = object[index].address;
}

tableBody.innerHTML = object
  .map((element, index) => {
    let fullAddress = element.address;
    let shortAddress =
      fullAddress.length > 10 ? fullAddress.slice(0, 10) + "..." : fullAddress;
    return `<tr>
  <td>${element.userName}</td>
  <td>${element.company}</td>
  <td>${element.phoneNo}</td>
  <td>
    <span id="addr-${index}">${shortAddress}</span>
    ${
      fullAddress.length > 10
        ? '<button onclick="toggleAddress(' + index + ')">Show Full</button>'
        : ""
    }
  </td>
</tr>`;
  })
  .join("");
