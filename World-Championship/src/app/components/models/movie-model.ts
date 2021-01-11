export class MovieModel {
     

    constructor(
      public id: string,
      public titulo: string,
      public ano: string,
      public nota: number,
      public checked: boolean
    ) {
      this.checked = false
    }
  }