import { getCityAll } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
    state: () => {
        return{
            allCities :{},
        }
    },
    actions:{
         async fetchALLCitiesData(){
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})

export default useCityStore