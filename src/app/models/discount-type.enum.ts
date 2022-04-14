export enum DiscountType {
  NULL = <any>{ label: '', value: 0 },
  SECOND_FREE = <any>{ label: 'Buy one get one free', value: 0 },
  THIRD_ONE_DISCOUNT = <any>{ label: '15% discount for 3 purchases', value: 1 },
  OVER_ONE_TOUSEND = <any>{
    label: '20% discount on 1000$ or more cheap products',
    value: 2,
  },
}
