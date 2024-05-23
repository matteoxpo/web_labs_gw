import { defineStore } from 'pinia';
import axios from 'axios';

export const useCatalog = defineStore('catalog-store', {
  state: () => {
    return {
      newArrivals: [],
      fetching: false
    }
  },

  getters: {
    results(state) {
      return state.newArrivals;
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchNewArrivals() {
      console.log("asdasd")

      this.fetching = true;
      try {
        const response = await axios.get('https://api.hh.ru/vacancies');
        this.newArrivals = response.data.items;
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
      this.fetching = false;
    },

    async fetchJobs(searchQuery) {
      this.fetching = true;
      try {
        const response = await axios.get('https://api.hh.ru/vacancies', {
          params: {
            text: searchQuery
          }
        });
        this.newArrivals = response.data.items;
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
      this.fetching = false;
    }
  }
});
