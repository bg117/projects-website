---
title: Random number generator
---

<!-- markdownlint-disable no-inline-html -->

{{< rawhtml >}}

    <script type="text/javascript" src="/scripts/jquery-latest.min.js"></script>
    <script type="text/javascript" src="/scripts/rng.js"></script>
    <script type="text/javascript">
        let isAdvancedOptionsEnabled = false

        function toggleAdvancedOptions() {
            isAdvancedOptionsEnabled = !isAdvancedOptionsEnabled

            let minNumberField = $('#minNumberFld'),
                maxNumberField = $('#maxNumberFld'),
                advancedOptButton = $('#advancedOptBtn')

            if (isAdvancedOptionsEnabled) {
                minNumberField.prop('disabled', false)
                maxNumberField.prop('disabled', false)
                advancedOptButton.html('Disable advanced options')
            } else {
                minNumberField.prop('disabled', true)
                maxNumberField.prop('disabled', true)
                advancedOptButton.html('Enable advanced options')
            }
        }

        function generate() {
            var minNumberField = $('#minNumberFld'),
                maxNumberField = $('#maxNumberFld'),
                genNumbersLabel = $('#genNumbersLbl'),
                numberCount = parseInt($('#numberCountFld').val())

            if (isNaN(numberCount)) {
                alert('Generated number count must be a number')
                return
            }

            if (numberCount < 1) {
                alert('Please enter a number greater than 0')
                return
            }

            let min = 0,
                max = 10

            if (isAdvancedOptionsEnabled) {
                min = parseInt(minNumberField.val())
                max = parseInt(maxNumberField.val())
            }

            if (min > max) {
                alert('Min cannot be greater than max')
                return
            }

            if (isNaN(min) || isNaN(max)) {
                alert('Min and max must be numbers')
                return
            }

            genNumbersLabel.html('')
            for (let i = 0; i < numberCount; i++) {
                genNumbersLabel.append(
                    generateRandomNumber(min, max).toString() + '<br />'
                )
            }
        }
    </script>

    <button id="advancedOptBtn" onclick="toggleAdvancedOptions()">Enable advanced options</button>
    <br />

    <label><strong>Note: </strong>without advanced options enabled, the maximum value of randomly generated numbers is
        limited to 10</label>
    <p></p>

    <label for="minNumberFld">Minimum number</label>
    <input type="number" id="minNumberFld" name="minNumberFld" value="0" disabled="true" />

    <br />

    <label for="maxNumberFld">Maximum number</label>
    <input type="number" id="maxNumberFld" name="maxNumberFld" value="10" disabled="true" />
    <p></p>

    <input type="number" id="numberCountFld" value="1" />
    <label>number/s</label>
    <p></p>

    <button onclick="generate()">Generate</button>

    <hr />

    <p style="font-size: 27px" id="genNumbersLbl"></p>

{{< /rawhtml >}}
