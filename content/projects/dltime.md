---
title: Download time calculator
---

<!-- markdownlint-disable no-inline-html -->
{{< rawhtml>}}

    <script type="text/javascript" src="/scripts/jquery-latest.min.js"></script>
    <script type="text/javascript">
        function calculateDownloadTime() {
            let fileSizeField = $('#fileSizeFld'),
                netSpeedField = $('#netSpeedFld'),
                sizeUnitDropdown = $('#sizeUnitDd'),
                speedUnitDropdown = $('#speedUnitDd'),
                downloadTimeLabel = $('#downloadTimeLbl')

            let fileSize = parseFloat(fileSizeField.val()),
                netSpeed = parseFloat(netSpeedField.val()),
                sizeUnit = sizeUnitDropdown.val(),
                speedUnit = speedUnitDropdown.val()

            if (isNaN(fileSize) || isNaN(netSpeed)) {
                downloadTimeLabel.text('Invalid input')
                return
            }

            switch (sizeUnit) {
                case 'kb':
                    fileSize *= 1000
                    break
                case 'mb':
                    fileSize *= 1000000
                    break
                case 'gb':
                    fileSize *= 1000000000
                    break
            }

            switch (speedUnit) {
                case 'kbps':
                    netSpeed *= 1000 / 8
                    break
                case 'mbps':
                    netSpeed *= 1000000 / 8
                    break
                case 'gbps':
                    netSpeed *= 1000000000 / 8
                    break
            }

            let downloadTime = fileSize / netSpeed
            let text = ''

            if (downloadTime >= 86400)
                text += (downloadTime / 86400).toFixed(3) + ' days'
            else if (downloadTime >= 3600)
                text += (downloadTime / 3600).toFixed(3) + ' hours'
            else if (downloadTime >= 60)
                text += (downloadTime / 60).toFixed(3) + ' minutes'
            else
                text += downloadTime.toFixed(3) + ' seconds'

            downloadTimeLabel.html(text)
        }
    </script>

    <label for="fileSizeFld">File size</label>
    <input type="number" id="fileSizeFld" name="fileSizeFld" />
    <select id="sizeUnitDd" name="sizeUnitDd">
        <option value="kb">KB</option>
        <option value="mb">MB</option>
        <option value="gb">GB</option>
    </select>

    <br />

    <label for="netSpeedFld">Net speed</label>
    <input type="number" id="netSpeedFld" name="netSpeedFld" />
    <select id="speedUnitDd" name="speedUnitDd">
        <option value="kbps">Kbps</option>
        <option value="mbps">Mbps</option>
        <option value="gbps">Gbps</option>
    </select>

    <p></p>

    <button onclick="calculateDownloadTime()">Calculate download time</button>

    <p style="font-size: 27px" id="downloadTimeLbl"></p>

{{< /rawhtml>}}