<template>
    <v-container class="home d-none d-md-flex" style='' fluid fill-height>
        <v-row class='row-form'>
            <v-col class='column-login column-form' cols='0' sm='5' md='5' xl='4' lg='4'>
                <form action="">
                    <div>
                        <h1 style="font-size:3vw">Iniciar Sesión</h1>
                    </div><br>
                    <div class='mt-5'>
                        <br>
                        <v-text-field label="Email o usuario" prepend-inner-icon="mdi-email" outlined dark v-model='User'></v-text-field>
                        <v-text-field type="password" label="contraseña" prepend-inner-icon="mdi-lock" outlined dark v-model='Pasword'></v-text-field>
                        <br>
                        <v-btn to="/crud" class='mt-5' elevation="2" rounded x-large style=' background-color: rgb(205, 151, 84,0.9) !important;' type="submit" dark>Ingresar</v-btn>
                    </div>
                </form>
            </v-col>
            <v-col class='column-login column-img' cols='0' sm='4' md='4' xl='4' lg='4'>
                <div class='text_efect'>
                    <h1 class='text-center'><strong>Khipar-App</strong></h1>
                    <p class='text_gallery text-justify mt-2'>
                       Khipar es una app móvil, que permite  establecer una interacción con la cultura wounaan.
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.home {
    padding: 0 !important;
    margin: 0 !important;
    height: 100vh;
    /*background-color: rgb(225, 213, 201, 0.5) !important;*/
    
}

.column-form form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 550px !important;
    width: 100% !important;
    padding: 2rem;
   background-color: rgb(205, 151, 84, 0.8) !important;
}

.column-login {

  box-shadow: 2px 2px 5px #999 !important;
}

form div {
    color: white !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% !important;
}

.row-form {
    margin: auto;
    display: flex;
    justify-content: center;
}

.column-login {
    height: 550px !important;
    position: relative;
    padding: 0 !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px !important;
    width: 100% !important;
}

.column-img {
    position: relative;
    background-size: contain !important;
    background-image: url("@/assets/principal.jpeg") !important;
    background-repeat: repeat;
    background-position: center;
}

.main_icon {
    margin: auto;
    width: 28%;
    display: flex;
    justify-content: space-between;
}

.text_efect {
    padding: 1rem !important;
    color: white;
    position: absolute;
    width: 80%;
    left: 49%;
    top: 50%;
    transform: translate(-49%, -50%);
 background-color: rgb(225, 213, 201, 0.5) !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(7.9px);
}

.text_efect p {
    text-align: justify;
}

.img_collage img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.creadores {
    margin: 0;
    margin-bottom: 0.2rem;
}
</style>
<script>

//import HelloWorld from '../components/HelloWorld'

export default {
    name: 'login',
    data(){
        return{
            User: 'Ana_@dmin2022',
            Pasword: '123456'
        }
    }

}
</script>