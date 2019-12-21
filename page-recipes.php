<?php
/**
 * Template Name: Recipes
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Gourmet_Artistry
 */

get_header(); ?>

    <div class="row column">
    <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

            <?php
            $terms = get_terms('course')
            ?>
          <ul class="simplefilter menu row">
              <?php foreach($terms as $term): ?>
                <li data-filter="<?php echo $term->term_taxonomy_id;?>"><?php echo $term->name ?></li>
              <?php endforeach; ?>
          </ul>
            <?php
            $args = array(
               'post_type' => 'recipes',
               'posts_per_page' => -1,
               'orderby' => 'title',
               'order' => 'ASC'
            );
            $query = new WP_Query($args);
            if( $query->have_posts() ) : ?>
            <?php while($query->have_posts()): $query->the_post(); ?>
            <?php the_title();?>
            <?php endwhile;?>
            <?php endif; ?>
            <?php wp_reset_postdata();?>
        </main><!-- #main -->
    </div><!-- #primary -->

<?php
echo "</div>";
get_footer();
