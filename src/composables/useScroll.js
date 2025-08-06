import { ref, onMounted, onUnmounted } from "vue";

export function useScroll() {
  const scrollY = ref(0);
  const scrollX = ref(0);

  const updateScrollPosition = () => {
    scrollY.value = window.scrollY;
    scrollX.value = window.scrollX;
  };

  onMounted(() => {
    window.addEventListener("scroll", updateScrollPosition);
    updateScrollPosition(); // Initialize with current scroll position
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateScrollPosition);
  });

  return {
    scrollY,
    scrollX,
  };
}
