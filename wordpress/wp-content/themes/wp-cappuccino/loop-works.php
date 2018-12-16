<?php $posts = get_field('works'); if( $posts ): ?>
  <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
    <?php setup_postdata($post); ?>

      <div class="small-6 medium-6 large-4 column end mix <?php $field = get_field_object('style'); $value = $field['value']; if( $value ): foreach( $value as $v ): echo $v.' '; endforeach; endif; ?> <?php $field = get_field_object('material'); $value = $field['value']; if( $value ): foreach( $value as $v ): echo $v.' '; endforeach; endif; ?> <?php $field = get_field_object('size'); $value = $field['value']; if( $value ): foreach( $value as $v ): echo $v.' '; endforeach; endif; ?> <?php $field = get_field_object('color'); $value = $field['value']; if( $value ): foreach( $value as $v ): echo $v.' '; endforeach; endif; ?> works-example" style="display: inline-block;">

          <div class="thumb" data-big-image="<?php the_post_thumbnail_url(); ?>">
            <?php the_post_thumbnail('works'); ?>
          </div>
          <div class="short-description">
            <div class="title"><span class="h4"><strong><?php the_title(); ?></strong></span></div>
            <div class="excerpt">
              <?php the_content(); ?>
              <br>
            </div>
            <div class="price">
              <p>от <span><?php the_field('price'); ?></span> $/метр</p>
            </div>
          </div>

          <?php $images = get_field('gallery'); if( $images ): ?>
            <div class="gallery-special-images">
              <?php $i = 0; if ($i == 0) { $class = ' class="active"'; } else { $class = ''; }; foreach( $images as $image ): ?>

                <a href="<?php echo $image['url']; ?>" data-img-number="<?php echo $i; ?>"<?php echo $class; ?>>
                  <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" />
                </a>
              <?php endforeach; ?>
            </div><!-- gallery-special-images -->
          <?php endif; ?>

      </div>
    <?php endforeach; ?>
  <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<div class="small-12 column text-center hide no-filter-results" style="display: none;">
  <span class="h2">Нет фотографий, которые соответствуют выбранным параметрам</span>
</div>



