import style from "./index.module.scss";
import store from "../../database";

export default function Phase2() {

  function php() {
    const htmlElement = document.createElement("a");
    const file = new Blob([store.indexphp], {type : 'application/php'});
    htmlElement.href = URL.createObjectURL(file);
    htmlElement.download = "index.php";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }

  return (
    <div className={style.phaseParent}>
      <h1>File Generator Phase 2</h1>
      <input type="text"></input>
      <button onClick={() => php()}>PHP</button>  
    </div>
  );
}