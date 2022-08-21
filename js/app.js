let bike = {
  name: "Yamaha FZ",
  Capacity: " 200cc",
  PerKilo: 3,
  image:
    "https://images.unsplash.com/photo-1576258728304-f4ff24b68ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eWFtYWhhJTIwZnp8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  description: "Welcome to our service",
};
let car = {
  name: "fearai FZ",
  Capacity: " 200cc",
  PerKilo: 3,
  image:
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  description: "Welcome to our service",
};
let bolbo = {
  name: "Green line ",
  Capacity: " 200cc",
  PerKilo: 3,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSog3cCe5u4owtVk1f8dcFgBvxvz400R6TPeU7fFzEXB5MpRghP3iPWIOQ9edzoy6YEDYk&usqp=CAU",
  description: "Welcome to our service",
};
let NovoAir = {
  name: "Green line ",
  Capacity: " 200cc",
  PerKilo: 3,
  image:
    "https://images.unsplash.com/photo-1615561916422-7014e1078997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm92byUyMGFpciUyMGFpcnBsYW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  description: "Welcome to our service",
};


let service = [car, bike, bolbo];

function displayShow(service) {
  const jasonstringfy = JSON.stringify(service);

  const mainSection = document.getElementById("MainSection");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-5">
      <img src="${service.image}" class="img-fluid w-100 h-100 rounded-start" alt="...">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h3>${service.description}</h3>
        <h5 class="card-title">${service.name}</h5>
        <p class="card-text">${service.Capacity}</p>
        <p class="card-text"><small class="text-muted">${service.PerKilo}</small></p>
        <button type="button" class="btn btn-primary onclick="handleBooking(${jasonstringfy})" data-bs-toggle="modal" data-bs-target="#exampleModal">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>
    `;
  mainSection.appendChild(div);
}
displayShow(car);
displayShow(bike);
displayShow(bolbo);
displayShow(NovoAir);

function handleBooking(obj) {

  console.log("kutub")
  const ModalBody = document.getElementById('ModalBody');
  ModalBody.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img class="${obj.image}" src="..." alt="Card image cap">
  <div class="card-body">
  <h1>${obj.name}</h1>
    <p class="card-text">${obj.description}</p>
  </div>
</div>
  `;
}
