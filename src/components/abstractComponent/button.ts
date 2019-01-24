import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace, State } from 'vuex-class';
import { SumState } from '@/store/modules/sum';

export abstract class InputComponent extends Vue {

    @State public sum!: SumState;

    public abstract clickEvent(): void;
}
