import style from "./index.module.scss";

export default function Phase1() {

  function downloadTxtFile() {
    const htmlElement = document.createElement("a");
    const file = new Blob(["Hey Testing!"], {type: 'text/plain;charset=utf-8'});
    
    //var aFileParts = ['<a href="https://google.com"><b id="b">hey!</b></a>'];
    //const file = new Blob(aFileParts, {type : 'text/html'});
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

  return (
    <div className={style.phaseParent}>
      <h1>File Generator</h1>
      <button onClick={() => downloadTxtFile()}>Download a TXT file</button>  
      <button onClick={() => downloadHTMLFile()}>Download a HTML file</button>  
    </div>
  );
}