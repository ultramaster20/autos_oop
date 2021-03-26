(function () {

    var garage = document.getElementById("garage");

    for (var i = 0; i < 7; i++) {
        var div = document.createElement("div");
        var id = 'car' + i;
        div.id = id;
        garage.appendChild(div);
        startCarProccess(id);
    }
    function startAllCarsListener() {
        alert('should start all cars')
    }

    var startAllCars = document.getElementById('start-all-cars');
    startAllCars.addEventListener('click', startAllCarsListener );
})();