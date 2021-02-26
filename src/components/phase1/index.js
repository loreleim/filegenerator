import style from "./index.module.scss";

export default function Phase1() {

  function downloadTxtFile() {
    const htmlElement = document.createElement("a");
    const file = new Blob(["Hey Testing!"], {type: 'text/plain;charset=utf-8'});
    htmlElement.href = URL.createObjectURL(file);
    htmlElement.download = "myFile.txt";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }

  function downloadHTMLFile() {
    const htmlElement = document.createElement("a");
    var aFileParts = ['<a href="https://google.com"><b id="b">hey!</b></a>'];
    const file = new Blob(aFileParts, {type : 'text/html'});
    htmlElement.href = URL.createObjectURL(file);
    var testing = "test" //this is the listener
    htmlElement.download = "myFile.html";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }

  function potentiallyFormatted() {
    const htmlElement = document.createElement("a");
    var aFileParts = ['<a href="https://google.com"><b id="b">hey!</b></a>'];
    const file = new Blob(aFileParts, {type : 'text/plain', endings:'native'});
    htmlElement.href = URL.createObjectURL(file);
    htmlElement.download = "myFile.html";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }

  return (
    <div className={style.phaseParent}>
      <h1>File Generator</h1>
      <button onClick={() => downloadTxtFile()}>Download a TXT file</button>  
      <button onClick={() => downloadHTMLFile()}>Download a HTML file</button>  
      <button onClick={() => potentiallyFormatted()}>Testing a formatted version</button>  
    </div>
  );
}