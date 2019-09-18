<script>
export default {

  mounted() {
    this.getSchool()
  },

  methods: {
    async getSchool() {
      try {
        const res = await this.$axios.get('http://www.mocky.io/v2/5d82108e300000376d699abf')
        this.$store.commit('schools/set', res.data.schools)
        if ( res ) { this.students(res.data.schools) } else { return null }
      } catch (e) {
        console.log('error')
      }
    },

    students(schools) {
      this.$store.commit('students/set', schools)
    }
  }
}
</script>

<template>
    <div id="app" >
        <div id="board">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
body {
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgb(255,192,159);
  background: linear-gradient(16deg, rgba(255,192,159,1) 0%, rgba(244,233,205,1) 100%);
}
#board {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 90vw;
  background: white;
  border-radius: 12px;
  box-shadow: 12px 11px 11px 6px rgba(0,0,0,0.18);
}

</style>
