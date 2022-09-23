class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card" style="width: 18rem;">
      <img src="${this.image}" class="card-img-top" alt="${this.manufacture}">
      <div class="card-body">
        <p>${this.manufacture}/${this.type}</p>
        <p class="bold">Rp ${this.rentPerDay}/hari</p>
        <p>${this.description}</p>
        <p><img src="./images/fi_users.png">${this.capacity} orang</p>
        <p><img src="./images/fi_settings.png" alt="">${this.transmission}</p>
        <p><img src="./images/fi_calendar.png" alt="">Tahun ${this.availableAt}</p>
      </div>
      <button class="pilihMobil">Pilih Mobil</button>
    </div>
    `;
  }
}
