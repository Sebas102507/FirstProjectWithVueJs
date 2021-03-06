new Vue({
  el:'#app',
  data(){
    return {
      name: "Ethereum",
      symbol: "ETH",
      image: "https://www.spectre.ai/assets/images/assets/ETH-logo.png?v=2.13",
      changePercent: 10,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      currentPrice:9000,
      pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],
      showPrices:false,
      color: 'f4f4f4',
      inputValue: 0      
    }
  },


  computed:{

    title(){
      return `${this.name} - ${this.symbol}`
    },

    convertedValue(){
      if(!this.inputValue){
        return 0;
      }
      return this.inputValue/this.currentPrice
    }

  },

  watch:{

    showPrices(newVal, oldVal){
      console.log(newVal,oldVal)
    }

  },

  methods : {

    toggleShowPrices(){
      this.showPrices= !this.showPrices
      this.color= this.color.split('').reverse('').join('')
    }

  }

})