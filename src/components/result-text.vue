<template>
  <div class="hello">
      <span>{{sum.sum}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace, State } from 'vuex-class';
import { SumState } from '@/store/modules/sum';


@Component({
    name: 'sum-text',
})
export default class TextComponent extends Vue {

    @State public sum!: SumState;

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
