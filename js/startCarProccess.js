function startCarProccess(containerId) {

    function render() {
        var container = document.getElementById(containerId);
        container.innerHTML = `
        <div class= 'car'>
            <div class='info-panel'>
                <label>status: </label> <span data-role='status'>off</span>
            </div>
            <div class="controls">
                <input data-role='start-car' type='button' value='Start'>
                <hr>
                <label>Gear box: </label> <span data-role='gear-box-value'>N</span>
            </div>
        </div>
        `;
    }

    function carStartListener() {
        var randomNumber = Math.random();

        if (randomNumber > 0.5) {
            carStarted();
        } else {
            carCannotBeStarted();
        }
    }

    function drawStatus(status) {
        processEls(statusLabels, function (item) {
            item.innerHTML = status;
        });
    }

    function processEls(arrayOfEls, processor) {
        for (var i = 0; i < arrayOfEls.length; i++) {
            var item = arrayOfEls[i];
            processor(item);
        }
    }

    function devLog(message) {
        //console.log(message);
    }

    function carStarted() {
        drawStatus('Car have started');

        devLog('Car have started');

        processEls(startButtons, function (startButton) {
            startButton.classList.add("hide");
        });

        gearBoxStarted();

        plannedCrashStarted();

        devLog('we wait crash');
    }

    function carCannoBeStarted() {
        devLog('Something wrong');
        drawStatus('Car can\'t be started. Try again!');
    }

    function gearBoxStarted() {
        var gearBoxValue = 1;

        processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
            gearBoxValueLabel.innerHTML = gearBoxValue;
        });




        function incrementGearBoxValue() {
            if (gearBoxValue < 5) {
                gearBoxValue++;

                processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
                    gearBoxValueLabel.innerHTML = gearBoxValue;
                });

            }
        }
        gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000);
    }

    function plannedCrashStarted() {
        function engineCrashed() {
            devLog('Engine crashed');
            drawStatus('Engine have crashed. Car have stopped');

            processEls(startButtons, function (startButton) {
                startButton.classList.remove("hide");
            });

            processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
                gearBoxValueLabel.innerHTML = 'N';
            });

            window.clearInterval(gearBoxInterval);
        }

        window.setTimeout(engineCrashed, 7000);
    }
    render();
    var gearBoxInterval;
    var startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
    var statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
    var gearBoxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role='gear-box-value']");

    processEls(startButtons, function (startButton) {
        startButton.addEventListener('click', carStartListener);
    });

}