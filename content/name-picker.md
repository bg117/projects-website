---
title: Name picker
---

<!-- markdownlint-disable no-inline-html -->

{{< rawhtml >}}

<script type="text/javascript" src="/scripts/jquery-latest.min.js"></script>
<script type="text/javascript">
    let removeNameAfterPick = false;

    function addName() {
        let name = $('#nameFld').val().trim()

        if (name.length === 0)
            return

        let namesDiv = $('#namesContainer')

        let nameLabel = $(`<strong class="86-name" style="margin-left: 8px">${name}</strong>`)
        let removeButton = $('<input type="button" value="Remove" />')
        let br = $('<br />')

        removeButton.on('click', function() {
            removeButton.remove()
            nameLabel.remove()
            br.remove()
        })

        namesDiv.append(removeButton)
        namesDiv.append(nameLabel)
        namesDiv.append(br)
    }

    function pickName() {
        let namesDiv = $('#namesContainer')
        let names = namesDiv.children('.86-name')
        let name = names[Math.floor(Math.random() * names.length)]

        $('#pickedLbl').html(name.innerHTML)

        if (removeNameAfterPick) {
            name.previousSibling.remove()
            name.nextSibling.remove()
            name.remove()
        }
    }
</script>

<label for="nameFld">Name</label>
<input type="text" id="nameFld" name="nameFld" />
<button onclick="addName()">Add</button>
<p></p>

<input type="checkbox" id="toggleRemoveNameChk" name="toggleRemoveNameChk"
       onclick="removeNameAfterPick = !removeNameAfterPick"/>
<label for="toggleRemoveNameChk">Remove name after getting picked</label>

<button onclick="pickName()">Pick a name</button>

<p style="font-size: 1.5em" id="pickedLbl"></p>

<div id="namesContainer"></div>

{{< /rawhtml >}}
