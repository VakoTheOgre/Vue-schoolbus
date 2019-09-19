<script>
    export default {
        methods: {
            login() {
                this.$store.commit('SET_TOKEN', 'shenanigans')
                this.$router.push('/dashboard')
            }
        }
    }
</script>

<template>
    <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
        <div class="login-artwork">
            <h1 class="login-artwork-title">Καλωσήρθατε</h1>
            <p class="login-artwork-text">στο schoolbus! Την πρώτη διαδυκτιακή πλατφόρμα διαχείρησης και βελτιστοποίησης διαδρομών για τα σχολικά λεωφορεία.</p>
            <img class="login-artwork-triL" src="https://cdn-tb.ams3.digitaloceanspaces.com/guest-service/31FGALS/LeftTriangle.svg" alt="triangle"/>
            <img class="login-artwork-logo" src="https://cdn-tb.ams3.digitaloceanspaces.com/guest-service/31FGALS/School.Illust.svg" alt="school-logo"/>
            <img class="login-artwork-triR" src="https://cdn-tb.ams3.digitaloceanspaces.com/guest-service/31FGALS/Trigono%20deksia.svg"  alt="triangle"/>
        </div>
        <div class="login-inputs">
            <div class="login-inputs-inner">
                <h1 class="login-inputs-title">Είσοδος</h1>
                <div class="hr-wrap">
                    <!-- <input class="login-inputs-email" placeholder="Email" type="email" v-model="email" /> -->
                    <hr />
                </div>
                <div class="hr-wrap">
                    <!-- <input class="login-inputs-pass" placeholder="Κωδικός" type="password" v-model="password" /> -->
                    <hr />
                </div>
                <button @click="login"  class="login-inputs-btn">Σύνδεση</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-artwork {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 100%;

    &-title {
        color: #636363;
        font-size: 4.5vw;
        font-weight: 400;
        position: absolute;
        top: 20%;
        left: 15%;
    }

    &-text {
        position: absolute;
        top: 40%;
        left: 20%;
        color: #636363;
        font-size: 1.3vw;
        max-width: 50%;
    }

    &-triL {
        height: calc(100% + 1px);
    }

    &-triR {
        height: 100%;
    }

    &-logo {
        position: absolute;
        bottom: 0;
        left: 61.5%;
        transform: translateX(-50%);
        width: 62.5%;
        z-index: 10;
    }
}
.login-inputs {
    height: 100%;
    width: 40%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    &-inner {
        height: 45%;
        width: 70%;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }

    &-title {
        font-size: 38px;
        color: #515151;
        font-weight: 500;
        padding-bottom: 40px;
        font-family: 'Roboto Slab', serif;
        margin-bottom: 10px;
    }

    &-email {
        border: none;
        height: 40px;
        padding-left: 20px;
        &:focus {
            background: #e0e0e0;
            color: #515050;
        }
    }

    &-pass {
        border: none;
        height: 40px;
        padding-left: 20px;
        &:focus {
            background: #e0e0e0;
            color: #515050;
        }
    }

    &-btn {
        margin-top: 30px;
        height: 40px;
        width: 100%;
        color: white;
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
        border: none;
        background: linear-gradient(90deg, rgba(255,192,159,1) 0%, rgba(244,233,205,1) 100%);
        transition: background 1s;
        &:hover {
            background: #636363;   
        }
    }
}
.hr-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
}
hr {
    width: 100%;
    height: 3px;
    border: none;
    margin-bottom: 15px;
    background: rgb(255,192,159);
    background: linear-gradient(90deg, rgba(255,192,159,1) 0%, rgba(244,233,205,1) 100%);
}
</style>