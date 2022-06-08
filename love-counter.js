export  default function LoveCounter() {
    return {
      loveCounter : Alpine.$persist(0).as('other-count'),
      init() {
        //   this.loveCounter = Alpine.persist(0)
        setInterval( () => {
          if (this.loveCounter > 0) {
            this.loveCounter--;
          }

         console.log(this.loveCounter)
        }, 3000)
      },
      love() {
       this.loveCounter++
      },
      hearts() {
         
         if (this.loveCounter <= 0) {
          return "💔"
         }
      
         if (this.loveCounter > 0 && this.loveCounter <= 5) {
           return "💚"
         } else if (this.loveCounter <= 10) {
           return "💚💚";
         } else {
           return "💚💚💚";
         }
      }
    }
}