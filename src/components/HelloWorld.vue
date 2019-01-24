<template>
  <div class="hello">
    <div>
      <span>{{msg}}</span>
      <sum-button></sum-button>
      <de-button></de-button>
      <br>
      <result-text></result-text>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SumInputComponent from './sum-button.vue';
import DeInputComponent from './decrease-button.vue';
import TextComponent from './result-text.vue';

@Component({
  components: {'sum-button': SumInputComponent, 'result-text': TextComponent, 'de-button': DeInputComponent },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public beforeCreate() {
    console.log('before create');
  }

  public created() {

    console.log('created');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
