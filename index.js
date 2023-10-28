var temperatureInput = document.getElementById("temperatureInput");
    var temperatureType = document.getElementById("temperatureType");
    var convertedOptions = document.getElementById("convertedOptions");

    // Add an event listener to the first dropdown to update the second dropdown
    temperatureType.addEventListener("change", function () {
        var value = temperatureType.value;

        // Clear the second dropdown
        convertedOptions.innerHTML = "";

        var options = [];

        if (value === "Celcius") {
            options = ["Fahrenheit", "Kelvin"];
        } else if (value === "Fahrenheit") {
            options = ["Celcius", "Kelvin"];
        } else if (value === "Kelvin") {
            options = ["Celcius", "Fahrenheit"];
        }

        // Add the options to the second dropdown
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i];
            convertedOptions.add(option);
        }
    });

    function convertTemperature() {
        var temperatureInput = document.getElementById("temperatureInput").value;
        var fromUnit = document.getElementById("temperatureType").value;
        var toUnit = document.getElementById("convertedOptions").value;
    
        // Check if all required fields are filled
        if (temperatureInput && fromUnit && toUnit) {
            temperatureInput = parseFloat(temperatureInput);
            
            var result = 0;
    
            // Perform temperature conversion based on the selected units
            if (fromUnit === "Celcius" && toUnit === "Fahrenheit") {
                result = (temperatureInput * 9/5) + 32;
            } else if (fromUnit === "Celcius" && toUnit === "Kelvin") {
                result = temperatureInput + 273.15;
            } else if (fromUnit === "Fahrenheit" && toUnit === "Celcius") {
                result = (temperatureInput - 32) * 5/9;
            } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
                result = (temperatureInput - 32) * 5/9 + 273.15;
            } else if (fromUnit === "Kelvin" && toUnit === "Celcius") {
                result = temperatureInput - 273.15;
            } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
                result = (temperatureInput - 273.15) * 9/5 + 32;
            } else {
                // Conversion from and to the same unit
                result = temperatureInput;
            }
    
            document.getElementById("conversionResult").innerHTML = `Result: ${temperatureInput} ${fromUnit} is ${result} ${toUnit}`;
        } else {
            alert("Please fill in all required fields.");
        }
    }
    