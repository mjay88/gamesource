<template>
	<div v-if="articleStore.getFeaturedSlides">
		<carousel :items-to-show="1" :wrap-around="true" class="p_top">
			<slide v-for="slide in articleStore.getFeaturedSlides" :key="slide.id">
				<div class="slider_bck" :style="{ background: `url(${slide.img})` }">
					<div class="slide_content">
						<div class="item">
							<div>{{ slide.title }}</div>
							<div>{{ slide.excerpt }}</div>
						</div>
					</div>
				</div>
			</slide>

			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>
<script setup>
///CAROUSEL
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
///ARTICLE STORE
import { useArticleStore } from "@/stores/articles";
const articleStore = useArticleStore();
</script>
