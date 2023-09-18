<script setup>
import { useCouponsStore } from '../stores/coupons';

const store = useCouponsStore();
</script>

<template>
  <p class="mt-5 py-5 font-bold border-t border-gray-200">¿Tienes un cupon?</p>

  <div class="flex">
    <input
      type="text"
      placeholder="Ingresa un cupon"
      class="p-2 bg-white border-gray-300 w-full"
      v-model="store.couponInput"
    />

    <button
      type="button"
      class="p-3 bg-green-400 font-bold disabled:opacity-30"
      @click="store.applyCoupon"
      :disabled="store.isValidCuopon"
    >
      Canjear
    </button>
  </div>

  <p class="py-2 text-center text-sm font-extrabold">
    {{ store.couponValidationMessage }}
  </p>
</template>
