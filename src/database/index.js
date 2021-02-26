class Database {
  constructor() {
    this.multidimensionalArray = {
      About: [
        {
          name: "CDL Mockups",
        }
      ]
    };

    this.html = "<h1>Hey</h1>";

    this.formatted = 
`
<!DOCTYPE html>
  <html lang="en">
</html>
`

this.indexphp =
`
<?php get_header(); ?>
	
<main class="themeshortcode-content">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php the_content() ?>
    <?php endwhile; endif; ?>
</main>
  
<?php get_footer(); ?>
`

  }
}

const store = new Database();
export default store;