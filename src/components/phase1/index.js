import style from "./index.module.scss";
import store from "../../database";

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
    htmlElement.download = "myFile.html";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }

  /*function potentiallyFormatted() {
    const htmlElement = document.createElement("a");
    const file = new Blob([html], {type : 'application/html'});
    htmlElement.href = URL.createObjectURL(file);
    htmlElement.download = "myFile.html";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }*/

  function test() {
    const htmlElement = document.createElement("a");
    const file = new Blob([store.formatted], {type : 'application/html'});
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
      <button onClick={() => test()}>From Store</button>  
    </div>
  );
}