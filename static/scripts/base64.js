function encodeTextToB64(str, isUrlSafe) {
    let result = btoa(str)

    if (isUrlSafe)
        return result.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')
    else
        return result
}

function decodeB64ToText(b64, isUrlSafe) {
    if (isUrlSafe)
        b64 = (b64 += Array(5 - b64.length % 4).join('=')).replace(/\-/g, '+').replace(/_/g, '/')

    return atob(b64)
}