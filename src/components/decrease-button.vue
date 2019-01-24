<template>
  <div class="hello">
    <input type="button" @click='clickEvent()' v-model="sum.sum">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace, State } from 'vuex-class';
import { SumState } from '@/store/modules/sum';
import { InputComponent } from '@/components/abstractComponent/button.ts';


@Component({
    name: 'sum-button',
})
export default class SumInputComponent extends InputComponent {

    @Action('sum/decreaseAction') public decreaseAction!: () => void;


    public clickEvent() {
        this.decreaseAction();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
