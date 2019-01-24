<template>
  <div class="hello">
    <input type="button" @click='sumEvent()' v-model="sum.sum">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace, State } from 'vuex-class';
import { SumState } from '@/store/modules/sum';


@Component({
    name: 'sum-button',
})
export default class InputComponent extends Vue {

    @Action('sum/incrementAction') public incrementAction!: () => void;

    @State public sum!: SumState;

    public sumEvent() {
        this.incrementAction();

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
