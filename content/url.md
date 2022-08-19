---
title: URL encoder and decoder
---

<!-- markdownlint-disable no-inline-html -->

{{< rawhtml >}}

    <script type="text/javascript" src="/scripts/jquery-latest.min.js"></script>
    <script type="text/javascript" src="/scripts/base64.js"></script>
    <script type="text/javascript">
        function encode() {
            let inputField = $('#inputFld'),
                outputField = $('#outputFld')

            outputField.val(encodeURIComponent(inputField.val()))
        }

        function decode() {
            let inputField = $('#inputFld'),
                outputField = $('#outputFld')

            outputField.val(encodeURIComponent(inputField.val()))
        }
    </script>

    <label for="inputFld">Input</label>
    <br />
    <textarea name="inputFld" id="inputFld"></textarea>

    <p></p>
    <p></p>

    <label for="outputFld">Output</label>
    <br />
    <textarea name="outputFld" id="outputFld" readonly></textarea>

    <hr />

    <button id="encodeBtn" onclick="encode()">Encode</button>
    <button id="decodeBtn" onclick="decode()">Decode</button>

{{< /rawhtml >}}
