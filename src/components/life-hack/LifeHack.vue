<template>
  <div id="container" class="container">
    {{ $store.state.count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
        message: 'Hello Vue!'
    };
  },
};
</script>
