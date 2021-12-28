async function makeRaw(e) {
    var doc = e.contentWindow.document;
    var html = "<xmp>" + doc.documentElement.innerHTML + "</xmp>"
    doc.open();
    doc.write(html);
    doc.close();
    console.log("finished")
}