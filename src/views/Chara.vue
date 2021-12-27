<template>
  <div class="chara">
    <character/>
  </div>
</template>

<script>
// @ is an alias to /src
import character from '@/components/Character.vue'

export default {
  name: 'Chara',
  components: {
    character,
  }
}
</script>
