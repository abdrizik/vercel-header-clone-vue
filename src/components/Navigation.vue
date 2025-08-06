<template>
  <div class="sticky top-0 w-full bg-white text-sm border-b border-gray-100">
    <div
      class="flex h-[46px] items-center px-2"
      :style="{ transform: `translateX(${navigationOffset}px)` }"
    >
      <nav class="flex relative ml-4" ref="nav" @mouseleave="hovered = null">
        <button
          v-for="(item, i) in NAVIGATION_ITEMS"
          :key="item.id"
          @click="active = i"
          @mouseenter="hovered = i"
          :class="active === i ? 'text-gray-900' : 'text-gray-600'"
          class="text-sm font-medium px-3 py-4 cursor-pointer relative z-10 transition-colors duration-200"
        >
          {{ item.label }}
        </button>

        <div
          v-show="hovered !== null"
          class="absolute inset-y-3 bg-gray-100 rounded transition-all duration-200"
          :style="hoverIndicatorStyle"
        />

        <div
          class="absolute bottom-0.5 left-0 h-[2px] bg-black transition-all duration-300"
          :style="activeIndicatorStyle"
        />
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRange } from "../composables/useRange.js";
import { useScroll } from "../composables/useScroll.js";
import { NAVIGATION_ITEMS } from "../constants/navigation.js";

const { scrollY } = useScroll();

const nav = ref();
const active = ref(0);
const hovered = ref(null);

const navigationOffset = computed(() => useRange(scrollY.value, 0, 50, 0, 42));

const getElementStyle = (index) => {
  const element = nav.value?.children[index];
  return element
    ? {
        transform: `translateX(${element.offsetLeft}px)`,
        width: `${element.offsetWidth}px`,
      }
    : {};
};

const activeIndicatorStyle = computed(() => getElementStyle(active.value));
const hoverIndicatorStyle = computed(() =>
  hovered.value !== null ? getElementStyle(hovered.value) : {}
);
</script>

<style scoped></style>
