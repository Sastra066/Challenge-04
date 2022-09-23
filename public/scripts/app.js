class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }
  

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }

    let tipeDriver = selElmnt.value;
    let Penumpang = document.getElementById("jlhPenumpang").value;
    let date = document.getElementById("date").value;
    let timeInput = document.getElementById("time").value;
    let dateInput = date + "T" +time;
    let formDate = Date.parse(dateInput);
    Car.list.forEach((car) => {
      let dateRenting = Date.parse(car.availableAt);
      let dateTime = car.availableAt;
      console.log(dateTime)
      let time = dateTime.toLocaleTimeString();

      let tempdate = JSON.stringify(car.availableAt);
      console.log(tempdate)
      let tempdate2 = tempdate.split("T");
      let tempdate3 = tempdate2[0].replace('"', "");
      console.log(timeInput);
      console.log(date);
      console.log(time);
      console.log(tempdate3);

      if(timeInput>time){
        console.log(timeInput);
      }

      if (
        Penumpang <= car.capacity &&
        tipeDriver == car.available &&
        time >= timeInput &&
        tempdate3 >= date
      ) {
        if (dateRenting >= formDate) {
          const node = document.createElement("div");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
          console.log("sa")
        }
        if (tipeDriver == car.available) {
          const node = document.createElement("div");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
          console.log("ds")
        }
      } else if (tipeDriver == "null" && Penumpang <= car.capacity) {
        if (
          dateRenting >= formDate ||
          (time >= timeInput && tempdate3 >= date)
        ) {
          const node = document.createElement("div");
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
          console.log("sd")
        }
      }
    });
    inputDone();
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
    inputDone();
  };
}
