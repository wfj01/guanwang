<template>
  <div>
    <!-- 头部 -->
    <pcenheaderview></pcenheaderview>
   
    <!-- 中间 -->
    <div id="page-container">
      <div id="et-main-area">
        <div id="main-content">
          <article
            id="post-8"
            class="post-8 page type-page status-publish hentry"
          >
            <div class="entry-content">
              <div id="et-boc" class="et-boc">
                <div class="et-l et-l--post">
                  <div class="et_builder_inner_content et_pb_gutters3">
                    <div
                      class="et_pb_section et_pb_section_0 et_animated et_pb_with_background et_section_regular"
                    >
                      <div class="et_pb_row et_pb_row_0 et_animated">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_with_border et_pb_module  et_animated et_hover_enabled  et_pb_text_align_left et_pb_bg_layout_dark et_pb_no_bg"
                          >
                            <div class="et_pb_promo_description">
                              <h1 class="et_pb_module_header">
                                110-acre land at the forest landing 
                              </h1>
                              <div>
                                <p style="text-align: left">
                                  about475736hectares of woodland、the total allowable cut  approx 1600million m³
                                </p>
                              </div>
                            </div>
                            <div class="et_pb_button_wrapper">
                              <a
                                class="et_pb_button et_pb_promo_button"
                                href="#"
                                >green eclolgy</a
                              >
                            </div>
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                    </div>
                    <!-- .et_pb_section -->
                    <div
                      class="et_pb_section et_pb_section_1 et_section_regular"
                    >
                      <div class="et_pb_row et_pb_row_1 et_pb_gutters3">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_0 et_animated et_pb_text_align_left et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <h2 style="text-align: center">
                                <strong>RONG-AN INC SCOPE OF BUSINESS</strong>
                              </h2>
                              <h4 style="text-align: center">
                                <span style="color: #808080"
                                  >harvesting and sales of logs 、sawmill downstream processing、import and export trade</span
                                >
                              </h4>
                            </div>
                          </div>
                          <!-- .et_pb_text -->
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                    </div>
                    <!-- .et_pb_section -->
                    <div
                      class="et_pb_section et_pb_section_2 et_section_regular"
                    >
                      <div class="et_pb_row et_pb_row_2">
                        <div
                          class="et_pb_column et_pb_column_1_3 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough"
                        >
                          <div
                            class="et_pb_module et_pb_image et_pb_image_0 et_animated et-waypoint"
                          >
                            <span
                              class="et_pb_image_wrap has-box-shadow-overlay"
                            >
                              <div class="box-shadow-overlay"></div>
                              <img
                                src="@/public/images/004.jpg"
                                alt=""
                                title="004"
                                height="auto"
                                width="auto"
                                srcset="
                                  @/public/images/004.jpg 320w,
                                  @/public/images/004.jpg 300w
                                "
                                sizes="(max-width: 320px) 100vw, 320px"
                                class="wp-image-37"
                              /> 
                            </span>
                          </div>
                          <div
                            class="et_pb_module et_pb_toggle et_pb_toggle_0 et_animated et_pb_toggle_item et_pb_toggle_close"
                            :class="itemtext1 === true  ? 'et_pb_toggle_open' : 'et_pb_toggle_close'"

                          >
                            <h5 class="et_pb_toggle_title" @click="zhanshi(1)">
                              harvesting and sales of logs
                            </h5>
                            <transition name="mybox">
                              <div class="clearfix kuozhan" v-show="itemtext1">
                                <p class="kuozhan_p">
                                  RONG-an Inc. integrates harvesting, sales and down-stream processing as a whole throughout the entire forest industrial chain
                                </p>
                              </div>
                            </transition>
                            <!-- .et_pb_toggle_content -->
                          </div>
                          <!-- .et_pb_toggle -->
                        </div>
                        <!-- .et_pb_column -->
                        <div
                          class="et_pb_column et_pb_column_1_3 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough"
                        >
                          <div
                            class="et_pb_module et_pb_image et_pb_image_1 et_animated et-waypoint"
                          >
                            <span
                              class="et_pb_image_wrap has-box-shadow-overlay"
                            >
                              <div class="box-shadow-overlay"></div>
                              <img
                                src="@/public/images/005.jpg"
                                alt=""
                                title="005"
                                height="auto"
                                width="auto"
                                srcset="
                                  @/public/images/005.jpg 320w,
                                  @/public/images/005.jpg 300w
                                "
                                sizes="(max-width: 320px) 100vw, 320px"
                                class="wp-image-38"
                              />
                            </span>
                          </div>
                          <div
                            class="et_pb_module et_pb_toggle et_pb_toggle_1 et_animated et_pb_toggle_item "
                            :class="itemtext2 === true  ? 'et_pb_toggle_open' : 'et_pb_toggle_close'"
                          >
                            <h5 class="et_pb_toggle_title" @click="zhanshi(2)">
                              sawmill downstream processing
                            </h5>
                            <transition name="mybox">
                              <div class="clearfix kuozhan" v-show="itemtext2">
                                <p class="kuozhan_p">
                                  With the confidence in Guyana forest produce, Rong-an Inc. also established a sawmill to process various wood species
                                </p>
                              </div>
                            </transition>
                            <!-- .et_pb_toggle_content -->
                          </div>
                          <!-- .et_pb_toggle -->
                        </div>
                        <!-- .et_pb_column -->
                        <div
                          class="et_pb_column et_pb_column_1_3 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_image et_pb_image_2 et_animated et-waypoint"
                          >
                            <span
                              class="et_pb_image_wrap has-box-shadow-overlay"
                            >
                              <div class="box-shadow-overlay"></div>
                              <img
                                src="@/public/images/006.jpg"
                                alt=""
                                title="006"
                                height="auto"
                                width="auto"
                                srcset="
                                  @/public/images/006.jpg 320w,
                                  @/public/images/006.jpg 300w
                                "
                                sizes="(max-width: 320px) 100vw, 320px"
                                class="wp-image-39"
                              />
                            </span>
                          </div>
                          <div
                            class="et_pb_module et_pb_toggle et_pb_toggle_2 et_animated et_pb_toggle_item et_pb_text_align_left et_pb_toggle_close"
                            :class=" itemtext3 === true ? 'et_pb_toggle_open' : 'et_pb_toggle_close'"
                          >
                            <h5 class="et_pb_toggle_title" @click="zhanshi(3)">
                              import and export trade
                            </h5>

                            <transition name="mybox">
                              <div class="clearfix kuozhan" v-show="itemtext3">
                                <p class="kuozhan_p">
                                Rong-an Inc. manages the sales network and O2O platform in South America and Asia,promoting the forest produces across the world
                                </p>
                              </div>
                            </transition>
                            <!-- .et_pb_toggle_content -->
                          </div>
                          <!-- .et_pb_toggle -->
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                      <div class="et_pb_row et_pb_row_3">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <h1 style="text-align: center">
                                <span style="color: #808080"
                                  >BRIEF INTRODUCTION OF PRODUCTION CAPACITY OF RONG-AN INC IS FORESTRY CONCESSIONS</span
                                >
                              </h1>
                              <h5 style="text-align: center">
                                <span style="color: #999999"
                                  >Rong-an INC has two forestry concessions</span
                                >
                              </h5>
                            </div>
                          </div>
                          <!-- .et_pb_text -->
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                      <div class="et_pb_row et_pb_row_4">
                        <div
                          class="et_pb_column et_pb_column_1_3 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_2 et_animated et_pb_text_align_left et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <h3>projest forest area</h3>
                              <p>
                                fprest area 57927hectare、total timber output about 77.2million cubic meters、according to the regulation of Guyana Forestry Commission、the annual allowable cut of a square kilometer is 1,333m³。1hectare=0.01 square kilometer
                              </p>
                            </div>
                          </div>
                          <!-- .et_pb_text -->
                          <div
                            class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module"
                          >
                            <a
                              class="et_pb_button et_pb_button_0 et_hover_enabled et_pb_bg_layout_dark"
                              href=""
                              >FOREST ZONE</a
                            >
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                        <div
                          class="et_pb_column et_pb_column_2_3 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_image et_pb_image_3 et_animated et-waypoint"
                          >
                            <span class="et_pb_image_wrap"
                              ><img
                                src="@/public/images/f987838a68a08e05370b66177e9a523副本-2.png"
                                alt=""
                                title="f987838a68a08e05370b66177e9a523副本"
                                height="auto"
                                width="auto"
                            /></span>
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                      <div class="et_pb_row et_pb_row_5">
                        <div
                          class="et_pb_column et_pb_column_1_2 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough"
                        >
                          <div
                            class="et_pb_module et_pb_image et_pb_image_4 et_animated et-waypoint"
                          >
                            <span class="et_pb_image_wrap"
                              ><img
                                src="@/public/images/未命名-2.png"
                                alt=""
                                title="未命名-2"
                                height="auto"
                                width="auto"
                            /></span>
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                        <div
                          class="et_pb_column et_pb_column_1_2 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_3 et_animated et_pb_text_align_left et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <h3>PROJECT FOREST AREA</h3>
                              <p>
                               forest area 417809 hectare、total timber output about 557Million cubic meters、if 60% of the logs produce are processed through sawmill and kiln dries to different grades of lumber products,two to five times of extra value will be added
                              </p>
                            </div>
                          </div>
                          <!-- .et_pb_text -->
                          <div
                            class="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_module"
                          >
                            <a
                              class="et_pb_button et_pb_button_1 et_hover_enabled et_pb_bg_layout_dark"
                              href=""
                              >FOREST ZONE</a
                            >
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                    </div>
                    <!-- .et_pb_section -->
                    <div
                      class="et_pb_section et_pb_section_3 et_section_regular"
                    >
                      <div class="et_pb_row et_pb_row_6">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_4 et_animated et_pb_text_align_center et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <h2>TO CREATE GLOBAL ECOLOGICAL FOREST TRADING PLATFORM</h2>
                              <p>
                                Multilateral win-win and independently circulated forest platform system, starting from Guyana,radiating to South America and even the whole world
                              </p>
                            </div>
                          </div>
                          <!-- .et_pb_text -->
                          <div
                            class=" et_pb_module et_pb_search et_pb_search_0 et_animated et_pb_text_align_left et_pb_bg_layout_light"
                          >
                            <form
                              role="search"
                              method="get"
                              class="et_pb_searchform"
                              action="index.html"
                            >
                              <div>
                                <label class="screen-reader-text" for="s"
                                  >搜索：</label
                                >
                                <input
                                  type="text"
                                  name="s"
                                  placeholder="forest ecological trade"
                                  class="et_pb_s"
                                />
                                <input
                                  type="hidden"
                                  name="et_pb_searchform_submit"
                                  value="et_search_proccess"
                                />

                                <input
                                  type="hidden"
                                  name="et_pb_include_posts"
                                  value="yes"
                                />
                                <input
                                  type="hidden"
                                  name="et_pb_include_pages"
                                  value="yes"
                                />
                                <input
                                  type="submit"
                                  value="Search"
                                  class="et_pb_searchsubmit"
                                />
                              </div>
                            </form>
                          </div>
                          <!-- .et_pb_text -->
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                      <div class="et_pb_row et_pb_row_7">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_11 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_5 et_animated et_pb_text_align_left et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <h1 style="text-align: center">NEWS CENTER</h1>
                            </div>
                          </div>
                          <!-- .et_pb_text -->
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                      <div class="et_pb_row_8 et_animated">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_12 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_blog_0 et_animated et_pb_blog_grid_wrapper"
                          >
                            <div class="et_pb_blog_grid clearfix">
                              <div class="et_pb_ajax_pagination_container">
                                <div
                                  class="et_pb_salvattore_content"
                                  data-columns
                                  style="
                                    display: flex;
                                    justify-content: space-evenly;
                                  "
                                >
                                  <article
                                    id="post-65"
                                    style="width: 320px"
                                    class="et_pb_post clearfix et_pb_has_overlay et_pb_blog_item_0_0 post-65 post type-post status-publish format-standard has-post-thumbnail hentry category-12"
                                  >
                                    <div class="et_pb_image_container">
                                      <a
                                        href="./html/newslist.html"
                                        class="entry-featured-image-url"
                                        ><img
                                          src="@/public/images/111.jpg"
                                          alt="Chairman Chen Ming of Rongan Company of Guyana participated in the New Year reunion of Fujian Home Association of Guyana"
                                          class=""
                                          srcset="
                                            @/public/images/111.jpg        479w,
                                            @/public/images/111-400x250.jpg 480w
                                          "
                                          sizes="(max-width:479px) 479px, 100vw "
                                          width="400"
                                          height="250" /><span
                                          class="et_overlay et_pb_inline_icon"
                                          data-icon="R"
                                        ></span
                                      ></a>
                                    </div>
                                    <!-- .et_pb_image_container -->
                                    <h3 class="entry-title">
                                      <a href="./html/newslist.html"
                                        >Chairman Chen Ming of Rongan Company of Guyana participated in the New Year reunion of Fujian Home Association of Guyana</a
                                      >
                                    </h3>

                                    <p class="post-meta">
                                      by 
                                      <span class="author vcard"
                                        ><a
                                          href="/html/newslist.html"
                                          title="发表人 rongan"
                                          rel="author"
                                          >rongan</a
                                        ></span
                                      >
                                      |
                                      <a href="./html/newslist.html" rel="tag"
                                        >英文新闻</a
                                      >
                                    </p>
                                    <div class="post-content">
                                      <div class="post-content-inner">
                                        <p>
                                         2018At 6:30 p.m. on February 4, 2008, the Fujian Association of Guyana hosted the New Year reunion
                                        </p>
                                      </div>
                                      <a
                                        href="./html/newslist.html"
                                        class="more-link"
                                        >read more</a
                                      >
                                    </div>
                                  </article>
                                  <!-- .et_pb_post -->

                                  <article
                                    id="post-62"
                                    style="width: 320px"
                                    class="et_pb_post clearfix et_pb_has_overlay et_pb_blog_item_0_1 post-62 post type-post status-publish format-standard has-post-thumbnail hentry category-12"
                                  >
                                    <div class="et_pb_image_container">
                                      <a
                                        href="./html/newslist.html"
                                        class="entry-featured-image-url"
                                        ><img
                                          src="@/public/images/222.png"
                                          alt="2012Annual Group has acquired exploration rights in eight large mining areas: PATARO, C95, C96, G80, G123, G88, etc."
                                          class=""
                                          srcset="
                                            @/public/images/222.png         479w,
                                            @/public/images/222-400x250.png 480w
                                          "
                                          sizes="(max-width:479px) 479px, 100vw "
                                          width="400"
                                          height="250" /><span
                                          class="et_overlay et_pb_inline_icon"
                                          data-icon="R"
                                        ></span
                                      ></a>
                                    </div>
                                    <!-- .et_pb_image_container -->
                                    <h3 class="entry-title">
                                      <a href="./html/newslist.html"
                                        >2012Annual Group has acquired exploration rights in eight large mining areas: PATARO, C95, C96, G80, G123, G88, etc.</a
                                      >
                                    </h3>

                                    <p class="post-meta">
                                      by
                                      <span class="author vcard"
                                        ><a
                                          href="/html/newslist.html"
                                          title="发表人 rongan"
                                          rel="author"
                                          >rongan</a
                                        ></span
                                      >
                                      |
                                      <a href="./html/newslist.html" rel="tag"
                                        > 英文新闻</a
                                      >
                                    </p>
                                    <div class="post-content">
                                      <div class="post-content-inner">
                                        <p>
                                          Since 2012, the Group has acquired exploration rights in eight large mining areas
                                        </p>
                                      </div>
                                      <a
                                        href="./html/newslist.html"
                                        class="more-link"
                                        >read more</a
                                      >
                                    </div>
                                  </article>
                                  <!-- .et_pb_post -->

                                  <article
                                    id="post-56"
                                    style="width: 320px"
                                    class="et_pb_post clearfix et_pb_has_overlay et_pb_blog_item_0_2 post-56 post type-post status-publish format-standard has-post-thumbnail hentry category-12"
                                  >
                                    <div class="et_pb_image_container">
                                      <a
                                        href="http://rooan.cn/index.php/zh/2020/10/27/%e7%be%8e%e5%9c%b0%e7%bb%bf%e9%87%91%e5%8f%82%e5%8a%a0%e6%bd%8d%e5%9d%8a%e5%b8%82%e7%a6%8f%e5%bb%ba%e5%95%86%e4%bc%9a%e5%a4%a7%e4%bc%9a/"
                                        class="entry-featured-image-url"
                                        ><img
                                          src="@/public/images/gq6.png"
                                          alt="美地绿金参加潍坊市福建商会大会"
                                          class=""
                                          srcset="
                                            @/public/images/gq6.png  479w,
                                            @/public/images/gq6-400x250.png 480w
                                          "
                                          sizes="(max-width:479px) 479px, 100vw "
                                          width="400"
                                          height="250" /><span
                                          class="et_overlay et_pb_inline_icon"
                                          data-icon="R"
                                        ></span
                                      ></a>
                                    </div>
                                    <!-- .et_pb_image_container -->
                                    <h3 class="entry-title">
                                      <a
                                        href="http://rooan.cn/index.php/zh/2020/10/27/%e7%be%8e%e5%9c%b0%e7%bb%bf%e9%87%91%e5%8f%82%e5%8a%a0%e6%bd%8d%e5%9d%8a%e5%b8%82%e7%a6%8f%e5%bb%ba%e5%95%86%e4%bc%9a%e5%a4%a7%e4%bc%9a/"
                                        >美地绿金参加潍坊市福建商会大会</a
                                      >
                                    </h3>

                                    <p class="post-meta">
                                      由
                                      <span class="author vcard"
                                        ><a
                                          href="/html/newslist.html"
                                          title="发表人 rongan"
                                          rel="author"
                                          >rongan</a
                                        ></span
                                      >
                                      |
                                      <a href="./html/newslist.html" rel="tag"
                                        >中文新闻</a
                                      >
                                    </p>
                                    <div class="post-content">
                                      <div class="post-content-inner">
                                        <p>
                                          辞旧迎新，为进一步弘扬商会文化，提高会员凝聚力，潍坊市福建商会年会如期举行
                                        </p>
                                      </div>
                                      <a
                                        href="http://rooan.cn/index.php/zh/2020/10/27/%e7%be%8e%e5%9c%b0%e7%bb%bf%e9%87%91%e5%8f%82%e5%8a%a0%e6%bd%8d%e5%9d%8a%e5%b8%82%e7%a6%8f%e5%bb%ba%e5%95%86%e4%bc%9a%e5%a4%a7%e4%bc%9a/"
                                        class="more-link"
                                        >了解更多</a
                                      >
                                    </div>
                                  </article>
                                  <!-- .et_pb_post -->
                                </div>
                                <!-- .et_pb_salvattore_content -->
                                <div>
                                  <div class="pagination clearfix">
                                    <div class="alignleft"></div>
                                    <div class="alignright"></div>
                                  </div>
                                </div>
                              </div>
                              <!-- .et_pb_posts -->
                            </div>
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                      <div class="et_pb_row et_pb_row_9">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_13 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module"
                          >
                            <a
                              class="et_pb_button et_pb_button_2 et_animated et_pb_bg_layout_dark"
                              href=""
                              >查看更多</a
                            >
                          </div>
                        </div>
                        <!-- .et_pb_column -->
                      </div>
                      <!-- .et_pb_row -->
                    </div>
                    <!-- .et_pb_section -->
                  </div>
                  <!-- .et_builder_inner_content -->
                </div>
                <!-- .et-l -->
              </div>
              <!-- #et-boc -->
            </div>
            <!-- .entry-content -->
          </article>
          <!-- .et_pb_post -->
        </div>
        <!-- #main-content -->
      </div>
      <!-- #et-main-area -->
    </div>
    <!-- #page-container -->

    <!-- 底部 -->
    <pfooterview></pfooterview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemtext1: false,
      itemtext2: false,
      itemtext3: false,
    };
  },
  methods: {
    // 展示
    zhanshi: function (index) {
      switch (index) {
        case 1:
          this.itemtext1 = !this.itemtext1;
          break;
        case 2:
          this.itemtext2 = !this.itemtext2;
          break;
        case 3:
          this.itemtext3 = !this.itemtext3;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
@import "../../../public/css/style-4.6.6.css";
@import "../../../public/css/style.min.css";
@import "../../../public/css/et-core-unified-365-160447754730.css";
@import "../../../public/css/wp-mediaelement.min.css";
@import "../../../public/css/mediaelementplayer-legacy.min.css";

.et_pb_number_counter11 {
  opacity: 1 !important;
}
/* 给过渡的name加样式 */

.mybox-leave-active,
.mybox-enter-active {
  transition: all 1.1s ease;
}

.mybox-leave-active,
.mybox-enter {
  height: 0px !important;
}

.mybox-leave,
.mybox-enter-active {
  height: 4rem;
}
.kuozhan_p {
  margin-top: 0.875rem;
  font-size: 0.875rem;
}

.kuozhan {
  overflow: hidden;
}
</style>