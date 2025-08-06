<template>
  <header class="bg-white px-6 pt-4 left-0 right-0">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a
          href="/"
          class="size-5 ml-2.5 fixed z-10"
          :style="{
            transform: `translateY(${logoTranslateY}px) scale(${logoScale})`,
          }"
        >
          <svg viewBox="0 0 76 65" fill="none">
            <path
              d="M37.5274 0L75.0548 65H0L37.5274 0Z"
              fill="currentColor"
              class="text-gray-900"
            />
          </svg>
        </a>

        <div class="flex items-center text-sm gap-4 ml-10">
          <svg class="text-gray-400" height="16" width="16" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
              fill="currentColor"
            />
          </svg>

          <div class="flex items-center gap-5">
            <img
              alt="User avatar"
              width="22"
              height="22"
              class="rounded-full"
              src="https://vercel.com/api/www/avatar?s=44&teamId=team_LUzwojYbpqh8t8GxJuBSY6UN"
            />
            <p>Abdelrahman's projects</p>
            <span class="bg-gray-100 px-2 py-1 rounded-full text-xs"
              >Hobby</span
            >
          </div>

          <button class="p-1 hover:bg-gray-50 rounded">
            <svg
              class="text-gray-600"
              height="16"
              width="16"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.7071 2.39644C8.31658 2.00592 7.68341 2.00592 7.29289 2.39644L4.46966 5.21966L3.93933 5.74999L4.99999 6.81065L5.53032 6.28032L7.99999 3.81065L10.4697 6.28032L11 6.81065L12.0607 5.74999L11.5303 5.21966L8.7071 2.39644ZM5.53032 9.71966L4.99999 9.18933L3.93933 10.25L4.46966 10.7803L7.29289 13.6035C7.68341 13.9941 8.31658 13.9941 8.7071 13.6035L11.5303 10.7803L12.0607 10.25L11 9.18933L10.4697 9.71966L7.99999 12.1893L5.53032 9.71966Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="relative flex items-center gap-2 px-2.5 py-1.5 h-[30px] w-[30px] lg:w-40 xl:w-48 border border-gray-300 rounded-full lg:rounded-md"
        >
          <svg
            class="text-gray-600 lg:text-gray-600 flex-shrink-0"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
              fill="currentColor"
            />
          </svg>
          <span class="hidden lg:block text-gray-400 flex-1 text-left text-sm"
            >Find…</span
          >
          <kbd
            class="hidden lg:block bg-white px-1.5 py-0.5 rounded text-xs text-gray-600 shadow-sm border border-gray-200"
            >F</kbd
          >
        </button>

        <button
          class="px-3 h-[30px] text-sm border border-gray-300 hover:bg-gray-50 rounded-md transition-all"
        >
          Feedback
        </button>

        <button
          class="flex items-center justify-center size-8 hover:bg-gray-50 rounded-full transition-all border border-gray-300"
        >
          <svg class="text-gray-600" height="16" width="16" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          class="flex items-center justify-center size-8 hover:bg-gray-50 rounded-full transition-all border border-gray-300 top-0 z-50 sticky"
        >
          <svg class="text-gray-600" height="16" width="16" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          class="flex items-center hover:bg-gray-50 rounded-lg p-1 transition-colors"
        >
          <img
            alt="User avatar"
            width="32"
            height="32"
            class="rounded-full"
            src="https://vercel.com/api/www/avatar?s=64&u=abdrizik-3056"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRange } from "../composables/useRange.js";
import { useScroll } from "../composables/useScroll.js";

const { scrollY } = useScroll();

const logoScale = computed(() => useRange(scrollY.value, 0, 50, 1, 0.8));
const logoTranslateY = computed(() => useRange(scrollY.value, 0, 50, 0, -12));

defineExpose({ scrollY, logoScale });
</script>
