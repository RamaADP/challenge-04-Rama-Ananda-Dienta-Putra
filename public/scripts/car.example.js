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
    <div class="card mt-4 mb-2" style="height: 95%">
      <img src="${this.image}" class="card-img-top" alt="${this.manufacture}" height= 250px; width=100%;">
      <div class="card-body">
        <h5>
          <b>
            ${this.manufacture} ${this.model}
          </b>
        </h5>
        <p>
          <b>
            Rp. ${this.rentPerDay} / hari
          </b>
        </p>
        <p>
          ${this.description}
        </p>
        <div class="mt-1">
          <i class="mt-1 me-2 icon-mobil fa-solid bi-people">  
            ${this.capacity} People
          </i>
        </div>
        <div class="mt-1">
          <i class="mt-1 me-2 icon-mobil fa-solid bi-gear">  
            ${this.transmission}
          </i>
        </div>
        <div class="mt-1 mb-2">
          <i class="mt-1 me-2 icon-mobil fa-solid bi-calendar">  
            ${this.year}
          </i>
        </div>
        <a href="#" class="btn btn-success d-flex justify-content-center">
          Pilih Mobil
        </a>
      </div>
    </div>`;
  }
}
