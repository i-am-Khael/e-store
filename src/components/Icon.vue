
<template>
  <font-awesome-icon :icon="props.icon" />
</template>

<script setup>
  const props = defineProps({
    'icon': String,
  });
</script>
