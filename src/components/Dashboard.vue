<template>
  <nota />
  <daftarMenu />
</template>
<script>
import nota from './contents/NotaPembelian.vue'
import daftarMenu from './contents/DaftarMenu.vue'

export default {
  name: 'dashboard',
  data() {
    return {

    }
  },
  components: {
    nota,
    daftarMenu
  }
}
</script>