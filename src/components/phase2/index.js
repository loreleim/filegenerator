import style from "./index.module.scss";
import React, { useState } from "react";

export default function Phase2() {

  //this is the themeName listener, that changes on input keyup
  const [themeName, setThemeName] = useState("default");

  var indexphp =
`
<?php get_header(); ?>
	
<main class="${themeName}-content">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php the_content() ?>
    <?php endwhile; endif; ?>
</main>
  
<?php get_footer(); ?>
`

  function php() {
    const htmlElement = document.createElement("a");
    const file = new Blob([indexphp], {type : 'application/php'});
    htmlElement.href = URL.createObjectURL(file);
    htmlElement.download = "index.php";
    document.body.appendChild(htmlElement);
    htmlElement.click();
  }

  //this listens to the letters that are typed into input
  //happens on keyup with the onChange hook
  function themeNameListener(e) {
    setThemeName(e.target.value);
  }

  return (
    <div className={style.phaseParent}>
      <h1>File Generator Phase 2</h1>
      <input type="text" onChange={themeNameListener}></input>
      <button onClick={() => php()}>PHP</button>  
    </div>
  );
}