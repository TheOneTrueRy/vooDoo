export class Upgrade{
  constructor(data){
    this.name = data.name
    this.comment = data.comment
    this.description = data.description
    this.price = data.price
    this.value = data.value
    this.quantity = data.quantity || 0
  }
}