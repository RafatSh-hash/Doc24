const percentageElement = document.getElementById("percentage");
        const targetPercentage = 99;
        let currentPercentage = 0;

        function updatePercentage() {
            if (currentPercentage < targetPercentage) {
                currentPercentage++;
                percentageElement.textContent = `${currentPercentage}%`;
                setTimeout(updatePercentage, 10); 
            }
        }

        updatePercentage();